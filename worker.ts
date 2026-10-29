/**
 * Cloudflare Worker that proxies model downloads from Hugging Face so the
 * browser never contacts huggingface.co directly.
 *
 * Route: /models/{org}/{repo}/resolve/{revision}/{path}
 *
 * Only the three whisper repos used by this app are allowed (not an open proxy).
 * Responses are cached at the edge with a long TTL.
 */

const ALLOWED_REPOS = new Set([
  "onnx-community/whisper-tiny",
  "onnx-community/whisper-base",
  "onnx-community/whisper-small"
]);

const UPSTREAM = "https://huggingface.co";

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

interface EdgeCache {
  match(request: Request): Promise<Response | undefined>;
  put(request: Request, response: Response): Promise<void>;
}

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range, Content-Type",
  "Access-Control-Expose-Headers":
    "Content-Length, Content-Range, Content-Type, ETag, Accept-Ranges"
};

function corsResponse(status: number, body: string): Response {
  return new Response(body, { status, headers: { ...CORS_HEADERS, "Content-Type": "text/plain" } });
}

export default {
  async fetch(request: Request, _env: unknown, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Only handle /models/* paths
    if (!url.pathname.startsWith("/models/")) {
      // Let Cloudflare's asset serving handle everything else
      return fetch(request);
    }

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return corsResponse(405, "Method not allowed");
    }

    // Parse: /models/{org}/{repo}/resolve/{revision}/{...path}
    const match = url.pathname.match(/^\/models\/([\w.-]+\/[\w.-]+)\/resolve\/([\w.-]+)\/(.+)$/);
    if (!match) {
      return corsResponse(400, "Invalid model path");
    }

    const [, repo, revision, filePath] = match;
    if (!ALLOWED_REPOS.has(repo!)) {
      return corsResponse(403, "Repository not in allowlist");
    }

    const upstreamUrl = `${UPSTREAM}/${repo}/resolve/${revision}/${filePath}`;

    // Check the Cloudflare cache first
    const cacheKey = new Request(url.toString(), { method: "GET" });
    const cache = (caches as unknown as { default: EdgeCache }).default;
    const cached = await cache.match(cacheKey);
    if (cached) {
      // If the client sent a Range header, slice the cached response
      const rangeHeader = request.headers.get("Range");
      if (rangeHeader && cached.status === 200) {
        return handleRange(cached, rangeHeader);
      }
      return addCors(cached);
    }

    // Fetch from upstream (follow redirects server-side)
    const upstreamHeaders = new Headers();
    // Do NOT forward Range to upstream for the cacheable request — we need the full body
    const upstreamResponse = await fetch(upstreamUrl, {
      headers: upstreamHeaders,
      redirect: "follow"
    });

    if (!upstreamResponse.ok) {
      return corsResponse(upstreamResponse.status, `Upstream returned ${upstreamResponse.status}`);
    }

    // Build a cacheable response with long TTL
    const responseHeaders = new Headers();
    const contentType = upstreamResponse.headers.get("Content-Type");
    if (contentType) responseHeaders.set("Content-Type", contentType);
    const contentLength = upstreamResponse.headers.get("Content-Length");
    if (contentLength) responseHeaders.set("Content-Length", contentLength);
    const etag = upstreamResponse.headers.get("ETag");
    if (etag) responseHeaders.set("ETag", etag);
    responseHeaders.set("Accept-Ranges", "bytes");
    responseHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
    for (const [key, value] of Object.entries(CORS_HEADERS)) {
      responseHeaders.set(key, value);
    }

    const response = new Response(upstreamResponse.body, {
      status: 200,
      headers: responseHeaders
    });

    // Cache the full response (non-blocking)
    ctx.waitUntil(cache.put(cacheKey, response.clone()));

    // If the client requested a range, serve it from the full response
    const rangeHeader = request.headers.get("Range");
    if (rangeHeader) {
      return handleRange(response, rangeHeader);
    }

    return response;
  }
};

/**
 * Serve a 206 Partial Content response from a full 200 response.
 */
async function handleRange(response: Response, rangeHeader: string): Promise<Response> {
  const body = await response.arrayBuffer();
  const total = body.byteLength;

  const rangeMatch = rangeHeader.match(/^bytes=(\d+)-(\d*)$/);
  if (!rangeMatch) {
    return addCors(new Response(body, { status: 200, headers: response.headers }));
  }

  const start = parseInt(rangeMatch[1]!, 10);
  const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : total - 1;

  if (start >= total || end >= total || start > end) {
    return new Response("Range not satisfiable", {
      status: 416,
      headers: {
        ...CORS_HEADERS,
        "Content-Range": `bytes */${total}`
      }
    });
  }

  const slice = body.slice(start, end + 1);
  const headers = new Headers(response.headers);
  headers.set("Content-Range", `bytes ${start}-${end}/${total}`);
  headers.set("Content-Length", String(slice.byteLength));

  return new Response(slice, { status: 206, headers });
}

function addCors(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(CORS_HEADERS)) {
    headers.set(key, value);
  }
  return new Response(response.body, { status: response.status, headers });
}
