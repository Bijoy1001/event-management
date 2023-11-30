// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr063sNssHMQYeCYAaJqOIaa4uawXfYBg",
  authDomain: "mini-events-8c365.firebaseapp.com",
  projectId: "mini-events-8c365",
  storageBucket: "mini-events-8c365.appspot.com",
  messagingSenderId: "382201375743",
  appId: "1:382201375743:web:7fb9ae3048f2311add55ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;