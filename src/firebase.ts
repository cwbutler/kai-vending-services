// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn31DVZ5_dOWn8piq8gHI3DYlT9SjAN4k",
  authDomain: "kai-vending-services.firebaseapp.com",
  projectId: "kai-vending-services",
  storageBucket: "kai-vending-services.appspot.com",
  messagingSenderId: "885793708231",
  appId: "1:885793708231:web:6daa22d9b895543e6386e2",
  measurementId: "G-9Y1TEVHL2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
