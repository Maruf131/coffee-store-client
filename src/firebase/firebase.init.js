// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpOlY9K6H_pq_KykMmxgiZI2aYZuLtcyo",
  authDomain: "coffee-store-app-26df0.firebaseapp.com",
  projectId: "coffee-store-app-26df0",
  storageBucket: "coffee-store-app-26df0.firebasestorage.app",
  messagingSenderId: "871271416983",
  appId: "1:871271416983:web:9c730d4730be3adee095d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);