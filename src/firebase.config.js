import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgU4VLcxDLNIYumGum2BG9tWFQoVsxaAY",
  authDomain: "clone-76023.firebaseapp.com",
  projectId: "clone-76023",
  storageBucket: "clone-76023.appspot.com",
  messagingSenderId: "1051116052937",
  appId: "1:1051116052937:web:8864be7bcce7f180af0818",
  measurementId: "G-BW2K7ETXBF"
};

//initialize the firebase app
const fireBaseApp = firebase.initializeApp(firebaseConfig);

//initialize the db
const db = fireBaseApp.firestore();

// this handles all the authentication loginc from firebase
const authenticateService = firebase.auth();

export {
  db,
  authenticateService
};