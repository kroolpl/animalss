// Basic service worker for caching
const CACHE_NAME = 'animals-cache-v1';
const urlsToCache = [
    '/',
    '/images/logo.png',
    '/fonts/inter-var.woff2'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
}); 