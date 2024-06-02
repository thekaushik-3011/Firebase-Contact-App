import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1LQE67IX1y5EuhHeJ2LLtfB9qqqDeLTI",
  authDomain: "vite-contact-f68f5.firebaseapp.com",
  projectId: "vite-contact-f68f5",
  storageBucket: "vite-contact-f68f5.appspot.com",
  messagingSenderId: "263326735371",
  appId: "1:263326735371:web:5b9eb60b3d638b024a7b0e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);