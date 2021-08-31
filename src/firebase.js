import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7LkPXbrr2pys4OGA6jtU00aI3bcfvsQo",
  authDomain: "linkedin-clone-7474d.firebaseapp.com",
  projectId: "linkedin-clone-7474d",
  storageBucket: "linkedin-clone-7474d.appspot.com",
  messagingSenderId: "664123411400",
  appId: "1:664123411400:web:5a18c30d4c7cc932610efd",
  measurementId: "G-RFHRXGTKY7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
