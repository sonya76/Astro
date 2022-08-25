// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "ceppic-react-astronomie-c1e4a.firebaseapp.com",
  projectId: "ceppic-react-astronomie-c1e4a",
  storageBucket: "ceppic-react-astronomie-c1e4a.appspot.com",
  messagingSenderId: "928086348174",
  appId: "1:928086348174:web:b40b6b6187d4a7695014df",
  measurementId: "G-PL5NNJ02B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };