import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCUk1kUEJMltxabzchx5_LaJRy6Ycu8spQ",
  authDomain: "ecommercial-db-90d7a.firebaseapp.com",
  projectId: "ecommercial-db-90d7a",
  storageBucket: "ecommercial-db-90d7a.appspot.com",
  messagingSenderId: "583813571488",
  appId: "1:583813571488:web:60fb9788291c3b93647ac5",
  measurementId: "G-1R33001YME",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);

  //checking is there any data, if not create a new one.
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
