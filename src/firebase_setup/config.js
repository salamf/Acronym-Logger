// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, orderBy } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw7SwK_ivL6mcSlPqLeQ0dodFS2Kt9IjU",
    authDomain: "acronym-logger.firebaseapp.com",
    projectId: "acronym-logger",
    storageBucket: "acronym-logger.appspot.com",
    messagingSenderId: "295900872332",
    appId: "1:295900872332:web:da1e0f502911c8b1cb85a9",
    measurementId: "G-GJCE1WPE0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
// const firestore = getFirestore(app);

// const firestore = app.firestore;
const db = getFirestore(app);

export { db };