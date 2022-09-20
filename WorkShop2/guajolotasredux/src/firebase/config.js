import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Server Grupal
const firebaseConfig = {
  apiKey: "AIzaSyDGia3RVuXuf3UFHBtj5GJHvbbGwnwNUH4",
  authDomain: "guappjolotas.firebaseapp.com",
  projectId: "guappjolotas",
  storageBucket: "guappjolotas.appspot.com",
  messagingSenderId: "1052089857847",
  appId: "1:1052089857847:web:285be130aeb59b925d0cb2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();


export { db, googleAuthProvider, facebookAuthProvider, firebase };
