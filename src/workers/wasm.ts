export async function fetchGzipped(url: string): Promise<ArrayBuffer | null> {
  const response = await fetch(url);
  if (!response.ok || !response.body) return null;
  const encoding = response.headers.get("Content-Encoding");
  if (encoding && encoding !== "identity") {
    return response.arrayBuffer();
  }
  if (typeof DecompressionStream === "undefined") return null;
  return new Response(response.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
}

export function wasmBlobUrl(buffer: ArrayBuffer): string {
  return URL.createObjectURL(new Blob([buffer], { type: "application/wasm" }));
}
