import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB47XAYuTcWBfIAgqMcAF3INxXlIg6ykKE",
  authDomain: "cloths-app-db.firebaseapp.com",
  databaseURL: "https://cloths-app-db.firebaseio.com",
  projectId: "cloths-app-db",
  storageBucket: "cloths-app-db.appspot.com",
  messagingSenderId: "554676165276",
  appId: "1:554676165276:web:5224970903183ba0016b59",
  measurementId: "G-NE8DBHLHWK",
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

firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
