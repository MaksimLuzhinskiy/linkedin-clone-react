import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPq3cSYvl9ui_ll0Jefjkn-AvhZHdtGcE",
  authDomain: "linkedin-clone-7c8bf.firebaseapp.com",
  projectId: "linkedin-clone-7c8bf",
  storageBucket: "linkedin-clone-7c8bf.appspot.com",
  messagingSenderId: "641178549306",
  appId: "1:641178549306:web:eba77766156eb462b38903",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
