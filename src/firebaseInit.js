// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkc8a1-cD3ADF-aZ4WbRpjv5DHbcWaSNY",
    authDomain: "photofolio-695af.firebaseapp.com",
    projectId: "photofolio-695af",
    storageBucket: "photofolio-695af.appspot.com",
    messagingSenderId: "198611009139",
    appId: "1:198611009139:web:52cc91851345cc4032b406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);