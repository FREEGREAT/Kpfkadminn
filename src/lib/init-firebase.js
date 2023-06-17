// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLyKFfFLKdwXB_Tz8aNJHs_t69hW_IO-A",
  authDomain: "kpkproj-6b79d.firebaseapp.com",
  databaseURL: "https://kpkproj-6b79d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kpkproj-6b79d",
  storageBucket: "kpkproj-6b79d.appspot.com",
  messagingSenderId: "297094442634",
  appId: "1:297094442634:web:a3e6e0c7d2396c2afa0773",
  measurementId: "G-RBKR0HLBKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);