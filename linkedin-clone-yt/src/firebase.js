
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnQxFpve69hqzN-_HHQGESStpDriYZD04",
    authDomain: "linkedin-clone-e5dd0.firebaseapp.com",
    projectId: "linkedin-clone-e5dd0",
    storageBucket: "linkedin-clone-e5dd0.appspot.com",
    messagingSenderId: "861451080451",
    appId: "1:861451080451:web:740fe13b20591dd7fb0f36",
    measurementId: "G-S1NM52Y3NJ"
  };

  
  //This special line of code here connects everything
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //gets the firestore database
  const db = firebaseApp.firestore();

  //we want to use firebase authentication
  const auth = firebase.auth();
  export { db, auth}