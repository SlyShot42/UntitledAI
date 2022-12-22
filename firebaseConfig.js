// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuU1KuDdSe8I3M6N4TaJvKcqWyZvRvxIg",
  authDomain: "untitledai-9d9da.firebaseapp.com",
  databaseURL: "https://untitledai-9d9da-default-rtdb.firebaseio.com",
  projectId: "untitledai-9d9da",
  storageBucket: "untitledai-9d9da.appspot.com",
  messagingSenderId: "405447559657",
  appId: "1:405447559657:web:bd1879a1ce19e7faa5a378",
  measurementId: "G-6LFSCR4GXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);