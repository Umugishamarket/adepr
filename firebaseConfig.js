// firebaseConfig.js

const firebaseConfig = {
  apiKey: "AIzaSyCxKjaqkSEsFY9fk5Y_XcN3viSQLX5S2Kw",
  authDomain: "adepr-system.firebaseapp.com",
  projectId: "adepr-system",
  storageBucket: "adepr-system.appspot.com",
  messagingSenderId: "370773084410",
  appId: "1:370773084410:web:e89dfd42c6fecdc5222143",
  measurementId: "G-J2ZGZ1EF54"
};

// Tangiza Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
