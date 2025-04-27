self.addEventListener('install', function(event) {
  console.log('Service Worker instalado correctamente.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activado y listo para controlar la app.');
});

self.addEventListener('fetch', function(event) {
  console.log('Interceptando solicitud a:', event.request.url);
});
