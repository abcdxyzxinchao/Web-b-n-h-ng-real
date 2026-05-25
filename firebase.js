// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDExlGshIrB0YI-bSrAPNBO3zwHpbXb8NY",
  authDomain: "shopreal-62678.firebaseapp.com",
  projectId: "shopreal-62678",
  storageBucket: "shopreal-62678.firebasestorage.app",
  messagingSenderId: "768646531769",
  appId: "1:768646531769:web:21f820938ffa2136c2e968",
  measurementId: "G-R0X07VQ9CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
