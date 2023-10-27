// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG8jzzPCbAUIR0muGgLwDZQalsx8UTVrc",
  authDomain: "netflixgpt-8586c.firebaseapp.com",
  projectId: "netflixgpt-8586c",
  storageBucket: "netflixgpt-8586c.appspot.com",
  messagingSenderId: "661974876713",
  appId: "1:661974876713:web:59a37b999f2985a2455238",
  measurementId: "G-K1SGEHC9PG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
