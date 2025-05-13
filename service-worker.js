const CACHE_NAME = 'portfolio-v5';
const urlsToCache = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/js/theme.js',
  '/assets/images/profile.jpg',
  // Add all your assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});