import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD9t5dkTlIAYvnuS8cJeKZjamsCClVhxw",
  authDomain: "restaurant-21bfe.firebaseapp.com",
  databaseURL: "https://restaurant-21bfe-default-rtdb.firebaseio.com",
  projectId: "restaurant-21bfe",
  storageBucket: "restaurant-21bfe.appspot.com",
  messagingSenderId: "211783045346",
  appId: "1:211783045346:web:c41ae2425f94c97af4cebb"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);


const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };