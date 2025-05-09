self.addEventListener("install", (e) => {
    console.log("Service Worker instalado");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (e) => {
    console.log("Service Worker activado");
  });
  
  self.addEventListener("fetch", (e) => {
    // Solo deja pasar las solicitudes, puedes personalizar esto para offline
  });
  