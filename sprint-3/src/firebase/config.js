import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyACjijb0Z5_FSE8gEPKWmcP-cyUzWD-iHw",
  authDomain: "blockmaster-a539b.firebaseapp.com",
  projectId: "blockmaster-a539b",
  storageBucket: "blockmaster-a539b.appspot.com",
  messagingSenderId: "767056045257",
  appId: "1:767056045257:web:3731a3a2f29a25a9671918",
  measurementId: "G-JZGFS9PBG4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookProvider, firebase };
