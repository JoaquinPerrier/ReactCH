import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgYxCjn6Si4VvKz7q05upRUqRZYRFCK0Q",
  authDomain: "tpreactch.firebaseapp.com",
  projectId: "tpreactch",
  storageBucket: "tpreactch.appspot.com",
  messagingSenderId: "252779937455",
  appId: "1:252779937455:web:dc7db427d9e554a3989e5a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
