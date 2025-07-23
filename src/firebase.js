// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ՔՈ_API_KEY",
  authDomain: "ՔՈ_PROJECT.firebaseapp.com",
  projectId: "ՔՈ_PROJECT_ID",
  storageBucket: "ՔՈ_PROJECT.appspot.com",
  messagingSenderId: "ՔՈ_SENDER_ID",
  appId: "ՔՈ_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
