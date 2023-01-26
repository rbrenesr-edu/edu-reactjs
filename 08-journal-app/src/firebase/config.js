// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLZuNjWYM7RD6ne5nfOrZf1gtw-nouIsU",
    authDomain: "journalappreactedu.firebaseapp.com",
    projectId: "journalappreactedu",
    storageBucket: "journalappreactedu.appspot.com",
    messagingSenderId: "63037053359",
    appId: "1:63037053359:web:a2de1c16500b06946a375a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);