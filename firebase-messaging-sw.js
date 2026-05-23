importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBo96omufRvXIpotlPAJWS0IGwuscZrXbc",
  authDomain: "aristeia-1aa28.firebaseapp.com",
  projectId: "aristeia-1aa28",
  storageBucket: "aristeia-1aa28.firebasestorage.app",
  messagingSenderId: "87886397455",
  appId: "1:87886397455:web:4e07f6b80eebebe3e1237a"
});

const messaging = firebase.messaging();

// Onderschep ALLE push events zelf, zodat Firebase niets automatisch toont
self.addEventListener('push', (event) => {
  const payload = event.data?.json() ?? {};
  const notification = payload.notification || payload.data || {};

  const title = notification.title || 'Aristeia 2026';
  const options = {
    body: notification.body || '',
    icon: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    badge: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    tag: 'aristeia-notification'
  };
  if (notification.image) options.image = notification.image;

  event.waitUntil(self.registration.showNotification(title, options));
});
