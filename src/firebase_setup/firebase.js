// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkL_df8QzHwauGxYxWE7ep1rtb-upenwc",
  authDomain: "kodestyle-00d.firebaseapp.com",
  projectId: "kodestyle-00d",
  storageBucket: "kodestyle-00d.appspot.com",
  messagingSenderId: "174775495813",
  appId: "1:174775495813:web:8f55c745acea1260df8dec",
  measurementId: "G-EWV7W9F9RY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
