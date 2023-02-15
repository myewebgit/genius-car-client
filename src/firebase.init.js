// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSyNLLO0zVCongxKIHzwKftShj6T9_ztM",
  authDomain: "genius-car-services-626a2.firebaseapp.com",
  projectId: "genius-car-services-626a2",
  storageBucket: "genius-car-services-626a2.appspot.com",
  messagingSenderId: "830674212532",
  appId: "1:830674212532:web:569ea2ac74265845c0a9e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;