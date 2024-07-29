import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNJ2WVlEqCu8IyayMpzhALFBixnwUzHME",
  authDomain: "e-kart-e834d.firebaseapp.com",
  projectId: "e-kart-e834d",
  storageBucket: "e-kart-e834d.appspot.com",
  messagingSenderId: "637724636413",
  appId: "1:637724636413:web:f38261e515f9d3df167a94"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }