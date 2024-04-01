import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1rTWtXVlje1jsMYLapxCuPAPmpYBxM9A",
  authDomain: "react-login-40a93.firebaseapp.com",
  projectId: "react-login-40a93",
  storageBucket: "react-login-40a93.appspot.com",
  messagingSenderId: "574391623460",
  appId: "1:574391623460:web:bfa458bbe6e8f8dd6c9db1",
  measurementId: "G-RS159425XF",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
