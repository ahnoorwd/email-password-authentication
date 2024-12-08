// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdYtBXD7et-iWGAC7NcZgjENrGkhUZHfQ",
  authDomain: "emailpassauth-6beee.firebaseapp.com",
  projectId: "emailpassauth-6beee",
  storageBucket: "emailpassauth-6beee.firebasestorage.app",
  messagingSenderId: "643526849126",
  appId: "1:643526849126:web:f82b26eeaba781c807f3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export  const auth = getAuth(app);