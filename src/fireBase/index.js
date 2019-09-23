import firebase from 'firebase/app';

import "firebase/storage"
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAw5Y_ZK2svB6nTXR1rhMSC2yMic_6q6NE",
    authDomain: "protfolio-72353.firebaseapp.com",
    databaseURL: "https://protfolio-72353.firebaseio.com",
    projectId: "protfolio-72353",
    storageBucket: "protfolio-72353.appspot.com",
    messagingSenderId: "93445650379",
    appId: "1:93445650379:web:79890ce648d5f567b2684e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export {
      storage,firebase as default
  }