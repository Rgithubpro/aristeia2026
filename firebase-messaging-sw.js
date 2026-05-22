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

// Deze functie luistert op de achtergrond.
// Door hier NIET self.registration.showNotification aan te roepen,
// voorkom je de dubbele melding als de backend al een notification-object stuurt.
messaging.onBackgroundMessage((payload) => {
  console.log('Ontvangen op achtergrond:', payload);
  // Laat Firebase zelf de melding tonen op basis van de payload (beter voor images!)
});
