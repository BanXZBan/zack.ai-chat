self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("zackai-cache").then((cache) => {
      return cache.addAll([
        "/zack.ai/",
        "/zack.ai/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
