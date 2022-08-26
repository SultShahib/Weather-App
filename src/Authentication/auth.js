// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpic-0FtvrM-pcnQvJ2agWbZspC6naYvY",
  authDomain: "weather-authentication.firebaseapp.com",
  projectId: "weather-authentication",
  storageBucket: "weather-authentication.appspot.com",
  messagingSenderId: "513065459315",
  appId: "1:513065459315:web:80daa1fe77f0ede39c1406",
  measurementId: "G-DPX53HF5EL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
