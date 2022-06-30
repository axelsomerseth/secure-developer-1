import { app } from "./firebase";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const onAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  return signOut(auth);
};

export { onAuthState, signUp, logIn, logOut };
