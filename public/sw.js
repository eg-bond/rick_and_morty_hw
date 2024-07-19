const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';

const ASSETS = ['/index.html'];

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
      .filter(key => (key !== staticCacheName) | dynamicCacheName)
      .map(key => caches.delete(key))
  );
});

// fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    // getting cached data
    caches.match(event.request).then(cacheRes => {
      return (
        cacheRes ||
        fetch(event.request).then(response => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});
