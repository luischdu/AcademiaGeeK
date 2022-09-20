import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHSWj08MMeeiCuceGLJ-1Fer5GIZiRdpQ",
  authDomain: "legiongeek-dcd0a.firebaseapp.com",
  projectId: "legiongeek-dcd0a",
  storageBucket: "legiongeek-dcd0a.appspot.com",
  messagingSenderId: "733192854788",
  appId: "1:733192854788:web:8ab778eac5550ab9650451",
  measurementId: "G-VDB11GGMJQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };
