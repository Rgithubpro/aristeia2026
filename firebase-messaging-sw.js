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

messaging.onBackgroundMessage((payload) => {
  const { title, body, image } = payload.notification || {};
  
  // Handmatige afhandeling zorgt voor juiste weergave van afbeeldingen
  const options = {
    body: body || '',
    icon: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    badge: 'https://tuualasepvtlgclxqpeu.supabase.co/storage/v1/object/public/logo/icon.png',
    vibrate: [200, 100, 200],
    requireInteraction: true,
    tag: 'aristeia-notification' // Tag zorgt ervoor dat nieuwe meldingen oude overschrijven i.p.v. stapelen
  };

  if (image) {
    options.image = image;
  }

  return self.registration.showNotification(title || 'Aristeia 2026', options);
});
