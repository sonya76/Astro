// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyhDCHlngz1fKuUg50EpawmvSuFDqMrZ8",
    authDomain: "ceppic-react-astronomie-a47aa.firebaseapp.com",
    projectId: "ceppic-react-astronomie-a47aa",
    storageBucket: "ceppic-react-astronomie-a47aa.appspot.com",
    messagingSenderId: "1062736516470",
    appId: "1:1062736516470:web:089cc240d0bff0c0ac5657",
    measurementId: "G-VP7CH3JRW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };