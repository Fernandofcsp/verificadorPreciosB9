const CACHE_NAME = "back9-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/images/icons/icon-192.png",
  "/images/icons/icon-512.png",
  "/styles.css",
  "/main.js"
];

// Instala y precachea
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Instalando...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activación
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activado");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch con respuesta desde caché
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
