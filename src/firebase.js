import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLy1BtTEFANQ4zV0ZDawWdsRYHx1RxJY",
  authDomain: "linkedin-clone-6a449.firebaseapp.com",
  projectId: "linkedin-clone-6a449",
  storageBucket: "linkedin-clone-6a449.appspot.com",
  messagingSenderId: "519498039556",
  appId: "1:519498039556:web:811238eb8fa246fd221051",
  measurementId: "G-7FFD4HECJE",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
