import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';

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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reerence to the place in the database where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location.
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData, 
      })
    } catch (error) {
      console.error(`Error creating user ${error.message}`);
    }
  }

  return getUserDocument(user.uid);
}
export const getUserDocument = (uid) => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid);
    // const userDocument = await firestore.collection('users').doc(uid).get();
    // return { uid, ...userDocument.data() };
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export default firebase;