// install event
self.addEventListener('install', event => {
  console.log('Service worker installed');
});

// activate event
self.addEventListener('activate', event => {
  console.log('Service worker activated');
});
