import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZVpcBiKc1UJKVmoF_BdKCkhQenC8YbZM",
    authDomain: "clone-4fec8.firebaseapp.com",
    projectId: "clone-4fec8",
    storageBucket: "clone-4fec8.appspot.com",
    messagingSenderId: "1026119009257",
    appId: "1:1026119009257:web:2bcf52ffb4635e84d14178",
    measurementId: "G-LL8396VSLS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db,auth,provider}