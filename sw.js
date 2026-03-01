self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('anand-canteen-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/customer.html',
        '/kitchen.html',
        '/track.html',
        '/images/upi-qr.jpeg'  // agar upi qr image use ho rahi hai
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});