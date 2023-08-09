import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtNpAQ1YPMhvmhVe-KSXUeYSBZL-XCPGQ",
  authDomain: "mckenzie-town-form.firebaseapp.com",
  projectId: "mckenzie-town-form",
  storageBucket: "mckenzie-town-form.appspot.com",
  messagingSenderId: "361964773806",
  appId: "1:361964773806:web:5b7c0c438e82bbeebf683f"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();