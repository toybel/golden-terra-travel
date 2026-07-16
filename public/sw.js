self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // Non mettiamo nulla in cache.
  // Questo gestore serve solo per completare i requisiti PWA di Chrome.
});