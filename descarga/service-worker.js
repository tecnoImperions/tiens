// service-worker.js

self.addEventListener('install', function(event) {
  console.log('Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activo.');
});

self.addEventListener('fetch', function(event) {
  // Puedes personalizar esto si quieres cachear archivos
});
