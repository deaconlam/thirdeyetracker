const firebaseConfig = {
  apiKey: "AIzaSyDtPLLjqXfSf_7NOLgjFaiMx0ejowSqusk",
  authDomain: "third-eye-tracker-beta.firebaseapp.com",
  projectId: "third-eye-tracker-beta",
  storageBucket: "third-eye-tracker-beta.firebasestorage.app",
  messagingSenderId: "474820269134",
  appId: "1:474820269134:web:cfad60eb3e2c5e74fd1f1f",
  measurementId: "G-K4M6LVKLBX"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();