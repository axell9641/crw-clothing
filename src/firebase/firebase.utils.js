import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyDWa1Osh8ChdLZSW9RMaN7SrHtk2tv4cBE",
  authDomain: "crwn-db-jose.firebaseapp.com",
  projectId: "crwn-db-jose",
  storageBucket: "crwn-db-jose.appspot.com",
  messagingSenderId: "752670098902",
  appId: "1:752670098902:web:70b545f7a0a5941bb75077",
  measurementId: "G-097LCLXCCR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
