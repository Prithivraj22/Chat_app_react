// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsz-3h_kIKee4WTv9Q4LL-hQ_uDTmmbbI",
  authDomain: "react-chat-2b005.firebaseapp.com",
  projectId: "react-chat-2b005",
  storageBucket: "react-chat-2b005.appspot.com",
  messagingSenderId: "147145465757",
  appId: "1:147145465757:web:69878294634ecfdb9e9974",
  measurementId: "G-2WM6DPPNHH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
