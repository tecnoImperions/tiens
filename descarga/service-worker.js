// service-worker.js

self.addEventListener('install', function(event) {
  console.log('✅ Service Worker instalado.');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('✅ Service Worker activo.');
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[SW] Interceptando:', event.request.url);
  event.respondWith(fetch(event.request));
});
