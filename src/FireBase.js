import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAMsIrboUe6pBbhe5yV5v_hh8CUtazJKk",
  authDomain: "styling-22-01.firebaseapp.com",
  projectId: "styling-22-01",
  storageBucket: "styling-22-01.appspot.com",
  messagingSenderId: "401337892938",
  appId: "1:401337892938:web:0275ee38de729181f066b3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
