import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQrLnjv5Whubm0BB9i3kJfKEucZlihok",
  authDomain: "hackgtemergency.firebaseapp.com",
  projectId: "hackgtemergency",
  storageBucket: "hackgtemergency.firebasestorage.app",
  messagingSenderId: "191835712001",
  appId: "1:191835712001:web:d9721ef8e271217bfbee00"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Make sure the "export" keyword is here
export const auth = getAuth(app);
