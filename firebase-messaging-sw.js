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

// Lege handler — dit voorkomt dat Firebase zijn eigen showNotification aanroept
// maar geeft jou via de native push listener de volledige controle
messaging.onBackgroundMessage(() => {});

// Jij handelt alles zelf af via de native push listener
self.addEventListener('push', (event) => {
  let title = 'Aristeia 2026';
  let body = '';
  let image = null;

  try {
    const payload = event.data.json();
    // Werkt zowel met notification payload (dashboard) als data payload (jouw edge function)
    const n = payload.notification || payload.data || {};
    title = n.title || title;
    body = n.body || body;
    image = n.image || null;
  } catch(e) {}

  const options = {
    body,
    icon: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    badge: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    tag: 'aristeia-notification'
  };
  if (image) options.image = image;

  event.waitUntil(self.registration.showNotification(title, options));
});
