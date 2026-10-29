const CACHE = "voicetotextfree-v2";
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

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    const cachePromise = caches.open(CACHE);
    const cachedPromise = cachePromise.then((cache) => cache.match(request));
    const networkPromise = fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const cache = await cachePromise;
          await cache.put(request, response.clone());
        }
        return response;
      })
      .catch(() => null);
    event.waitUntil(networkPromise.then(() => undefined).catch(() => undefined));
    event.respondWith(
      (async () => {
        const cached = await cachedPromise;
        if (cached) return cached;
        const fresh = await networkPromise;
        if (fresh) return fresh;
        const cache = await cachePromise;
        return (
          (await cache.match(OFFLINE_FALLBACK)) ||
          new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain" } })
        );
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
