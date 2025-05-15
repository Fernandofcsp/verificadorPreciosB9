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

// Instala y precachea con manejo de errores mejorado
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Instalando...");
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("[Service Worker] Cache abierto");
        // Cacheamos cada recurso individualmente para manejar errores
        const cachePromises = urlsToCache.map(url => {
          return cache.add(url).catch(error => {
            console.error(`[Service Worker] Error al cachear ${url}:`, error);
          });
        });
        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log("[Service Worker] Todos los recursos han sido cacheados");
        return self.skipWaiting();
      })
  );
});

// Activación con limpieza de caches antiguos
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activado");
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Eliminando cache antigua:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log("[Service Worker] Claiming clients");
      return self.clients.claim();
    })
  );
});

// Estrategia de fetch: Cache primero, luego red
self.addEventListener("fetch", (event) => {
  // Ignoramos solicitudes que no sean GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignoramos videos y blobs
  if (event.request.destination === 'video' || event.request.url.startsWith('blob:')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si encontramos en cache, lo devolvemos
        if (cachedResponse) {
          console.log("[Service Worker] Sirviendo desde cache:", event.request.url);
          return cachedResponse;
        }

        // Si no está en cache, hacemos fetch y cacheamos para futuras peticiones
        return fetch(event.request)
          .then(response => {
            // Solo cacheamos respuestas válidas
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonamos la respuesta para guardarla en cache
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
                console.log("[Service Worker] Cacheando nuevo recurso:", event.request.url);
              });

            return response;
          })
          .catch(error => {
            console.error("[Service Worker] Error al hacer fetch:", error);
            // Podrías devolver una página offline personalizada aquí
            // return caches.match('/offline.html');
          });
      })
  );
});

// Manejo del evento 'message' para actualizaciones
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});