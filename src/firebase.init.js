// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCovpu60_pr81kE-j22cr7JSr4J4Cv8VBs",
  authDomain: "independent-service-prov-b402c.firebaseapp.com",
  projectId: "independent-service-prov-b402c",
  storageBucket: "independent-service-prov-b402c.appspot.com",
  messagingSenderId: "430037458703",
  appId: "1:430037458703:web:e9d971bc8a4ec745bfa87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;