const firebaseConfig = {
  apiKey: "AIzaSyDnNQ3mnDjkeM-cfJe0-z_JaLfd1sM5kw8",
  authDomain: "thisisit-6f911.firebaseapp.com",
  projectId: "thisisit-6f911",
  storageBucket: "thisisit-6f911.firebasestorage.app",
  messagingSenderId: "580685206056",
  appId: "1:580685206056:web:9d76c4833a2a645fd05b1d",
  measurementId: "G-XDGBC4926B"
};

// Initialize Firebase
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();

let analytics = null;
if (typeof firebase.analytics === 'function') {
  try {
    analytics = firebase.analytics(app);
  } catch (_) {}
}

// Optional: enable Firestore offline persistence
db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
