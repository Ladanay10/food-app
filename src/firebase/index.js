import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVW8oxKTpB28Xfn2H_r--IhbJNhlyd5XM",
  authDomain: "food-377d8.firebaseapp.com",
  projectId: "food-377d8",
  storageBucket: "food-377d8.appspot.com",
  messagingSenderId: "1083539598210",
  appId: "1:1083539598210:web:cd872cdcba34026e0bbd9b"
};

export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore();
export const storage = getStorage();
export const auth = getAuth();