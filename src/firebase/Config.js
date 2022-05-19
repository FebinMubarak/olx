import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOaCaB0qcoGKmEYRE66COBbdZCoYyCu3g",
    authDomain: "project-olx-ef4dc.firebaseapp.com",
    projectId: "project-olx-ef4dc",
    storageBucket: "project-olx-ef4dc.appspot.com",
    messagingSenderId: "826542197414",
    appId: "1:826542197414:web:5f1bec146c3c02f319c267",
    measurementId: "G-EK9DX0HZKT"
  };


export default firebase.initializeApp(firebaseConfig);

