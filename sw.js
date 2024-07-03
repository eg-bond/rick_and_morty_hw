const staticCacheName = 'site-static-v1';

const ASSETS = ['/', '/index.html', '/episodes'];

// install event
self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(ASSETS);
});

// activate event
self.addEventListener('activate', async event => {
  const cachesKeysArr = await caches.keys();
  await Promise.all(
    cachesKeysArr
      .filter(key => key !== staticCacheName)
      .map(key => caches.delete(key))
  );
});

// fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      return cacheRes || fetch(event.request);
    })
  );
});
