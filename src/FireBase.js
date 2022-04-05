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

const firebaseConfig_bkp = {
  apiKey: "AIzaSyAq5LR6z7otDZ5dG9kyjX0IblBcx7i4zHQ",
  authDomain: "style-store-bckup.firebaseapp.com",
  projectId: "style-store-bckup",
  storageBucket: "style-store-bckup.appspot.com",
  messagingSenderId: "297982593436",
  appId: "1:297982593436:web:92639e17265230626da059",
};

const app = initializeApp(firebaseConfig_bkp);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
