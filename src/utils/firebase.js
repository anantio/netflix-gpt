// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkvWsKh-74sOJ9uz44ZyCv4zrHz3N6J80",
  authDomain: "cinewave-demo.firebaseapp.com",
  projectId: "cinewave-demo",
  storageBucket: "cinewave-demo.appspot.com",
  messagingSenderId: "488883476367",
  appId: "1:488883476367:web:058f41210005ccc4bf5dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();