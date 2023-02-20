// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwDE2c5tq4iyMS1SoEh8lYy7Opqoolce0",
  authDomain: "firestore-database-e0889.firebaseapp.com",
  projectId: "firestore-database-e0889",
  storageBucket: "firestore-database-e0889.appspot.com",
  messagingSenderId: "27789049961",
  appId: "1:27789049961:web:7033a430ba33cb6e03a2f8",
  measurementId: "G-1JLVER73M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;