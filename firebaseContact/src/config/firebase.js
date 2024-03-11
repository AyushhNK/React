// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA06rinYeH7vLLNggCNmjAMLdOvcQ-0d9Y",
  authDomain: "vite-contact-d4861.firebaseapp.com",
  projectId: "vite-contact-d4861",
  storageBucket: "vite-contact-d4861.appspot.com",
  messagingSenderId: "303772928292",
  appId: "1:303772928292:web:9517de42dc63688e07cbb1",
  measurementId: "G-79XW0GYN48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)