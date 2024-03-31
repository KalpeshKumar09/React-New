import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCw6NPsCAyAvHAyHkTtUHwZN129DFt_1lI",
  authDomain: "react-authentication-cf06f.firebaseapp.com",
  projectId: "react-authentication-cf06f",
  storageBucket: "react-authentication-cf06f.appspot.com",
  messagingSenderId: "59419787737",
  appId: "1:59419787737:web:6c96611654491d6a1a19c8",
  measurementId: "G-JDCW88HGKF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;