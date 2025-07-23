// src/api/firestore.js
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
}
