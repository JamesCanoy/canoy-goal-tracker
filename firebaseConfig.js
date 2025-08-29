
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqpvecQzFh3YkAxgnGK2kReh589XDaduk",
  authDomain: "goalproject-c.firebaseapp.com",
  projectId: "goalproject-c",
  storageBucket: "goalproject-c.firebasestorage.app",
  messagingSenderId: "1008585335869",
  appId: "1:1008585335869:web:bcc6b7103408a499753654"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)