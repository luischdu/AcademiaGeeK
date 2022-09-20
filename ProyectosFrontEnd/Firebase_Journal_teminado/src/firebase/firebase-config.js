import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjEJEW1Ml0UmhpW0HZP5TSs96AsgGkreo",
    authDomain: "app-frontend-6.firebaseapp.com",
    projectId: "app-frontend-6",
    storageBucket: "app-frontend-6.appspot.com",
    messagingSenderId: "66843513700",
    appId: "1:66843513700:web:ac800485c5370d3e30a071"
  };
  

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}