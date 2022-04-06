import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "style-store-bckup.web.app",
  projectId: "style-store-bckup",
  storageBucket: "style-store-bckup.appspot.com",
  messagingSenderId: "297982593436",
  appId: "1:297982593436:web:92639e17265230626da059",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
