import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDbt8xuUg2QtXHP16OvKvFNzKjE5fE2-NA",
  authDomain: "think-piece-live-4d3ba.firebaseapp.com",
  databaseURL: "https://think-piece-live-4d3ba.firebaseio.com",
  projectId: "think-piece-live-4d3ba",
  storageBucket: "think-piece-live-4d3ba.appspot.com",
  messagingSenderId: "999596537586",
  appId: "1:999596537586:web:7aca55a5bb696c388e826b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export default firebase;