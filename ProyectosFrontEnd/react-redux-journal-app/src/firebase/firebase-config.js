import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZjebNhqr17vY4saQ2frYgqiUW51pIfv4",
  authDomain: "backend-sprint-iii.firebaseapp.com",
  projectId: "backend-sprint-iii",
  storageBucket: "backend-sprint-iii.appspot.com",
  messagingSenderId: "23853923550",
  appId: "1:23853923550:web:14e605cb0e9f23a699d64f",
  measurementId: "G-BPH7W5KD3Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
