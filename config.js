import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA7bKWqxu8UZ_t5Q0dP2E3z9pGGg2lws_I",
    authDomain: "e-ride-e2dfb.firebaseapp.com",
    projectId: "e-ride-e2dfb",
    storageBucket: "e-ride-e2dfb.appspot.com",
    messagingSenderId: "926803835565",
    appId: "1:926803835565:web:17c7693ba93726898c6424"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
