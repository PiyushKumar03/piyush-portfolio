// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR0gZ9mvOO4MT0mNILKJ1VKMO_FKdr0xI",
  authDomain: "react-portfolio-dashboar-f0976.firebaseapp.com",
  projectId: "react-portfolio-dashboar-f0976",
  storageBucket: "react-portfolio-dashboar-f0976.appspot.com",
  messagingSenderId: "574791003114",
  appId: "1:574791003114:web:7032cb93a65cb85aa52093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);