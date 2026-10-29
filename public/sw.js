const CACHE = "voicetotextfree-v5";
const OFFLINE_FALLBACK = "/";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(["/", "/favicon.svg"])));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

/**
 * Listen for cache-clear messages from the main thread.
 * Usage: navigator.serviceWorker.controller.postMessage({ type: "clear-model-cache" })
 */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "clear-model-cache") {
    event.waitUntil(
      caches.open(CACHE).then(async (cache) => {
        const keys = await cache.keys();
        const modelKeys = keys.filter((req) => new URL(req.url).pathname.startsWith("/models/"));
        await Promise.all(modelKeys.map((key) => cache.delete(key)));
      })
    );
  }
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // /models/* — pass through to Worker proxy, do NOT intercept with SW cache.
  // The Worker + Cloudflare edge cache handle caching for model files.
  // Range requests and large binary files do not play well with SW caching.
  if (url.pathname.startsWith("/models/")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        try {
          const fresh = await fetch(request);
          if (fresh.ok) await cache.put(request, fresh.clone());
          return fresh;
        } catch {
          return (
            (await cache.match(request)) ||
            (await cache.match(OFFLINE_FALLBACK)) ||
            new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } })
          );
        }
      })()
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches
            .open(CACHE)
            .then((cache) => cache.put(request, copy))
            .catch(() => undefined);
        }
        return response;
      });
    })
  );
});
