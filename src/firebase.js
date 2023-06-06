import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuJunlNk-luUGXfNn3x_D0TCXGTUgYnrA",
  authDomain: "fir-auth-d94cf.firebaseapp.com",
  projectId: "fir-auth-d94cf",
  storageBucket: "fir-auth-d94cf.appspot.com",
  messagingSenderId: "439288930497",
  appId: "1:439288930497:web:e2229e06c2820054b3b440",
  measurementId: "G-ES1E83E3NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
