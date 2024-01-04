import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXuQdHU3W62iTX3LSE1xueXl-UCI62hh4",
  authDomain: "cinewave-97bf7.firebaseapp.com",
  projectId: "cinewave-97bf7",
  storageBucket: "cinewave-97bf7.appspot.com",
  messagingSenderId: "267661465231",
  appId: "1:267661465231:web:a40611fdf93a63cbe442fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
 