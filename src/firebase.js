import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB4riTDBkBI3rZCIuPyJoeSoHjWHeJbSRA",
    authDomain: "svelte-crud-537b6.firebaseapp.com",
    databaseURL: "https://svelte-crud-537b6.firebaseio.com",
    projectId: "svelte-crud-537b6",
    storageBucket: "svelte-crud-537b6.appspot.com",
    messagingSenderId: "67551368385",
    appId: "1:67551368385:web:8c1be4c96ef779e6ab7040"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore()