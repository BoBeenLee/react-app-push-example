// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.21.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDdFJKoVQTL_EgUcy0BOQFaVGEk1fktPrU",
  authDomain: "myspace-c3805.firebaseapp.com",
  databaseURL: "https://myspace-c3805.firebaseio.com",
  projectId: "myspace-c3805",
  storageBucket: "myspace-c3805.appspot.com",
  messagingSenderId: "757274443049",
  appId: "1:757274443049:web:ea967cb66d9dbf8f85cb38",
  measurementId: "G-3RXWEWDG32",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  //   // Customize notification here
  //   const notificationTitle = "Background Message Title";
  //   const notificationOptions = {
  //     body: "Background Message body.",
  //     icon: "/firebase-logo.png",
  //   };

  //   return self.registration.showNotification(
  //     notificationTitle,
  //     notificationOptions
  //   );
});
