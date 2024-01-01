import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr063sNssHMQYeCYAaJqOIaa4uawXfYBg",
  authDomain: "mini-events-8c365.firebaseapp.com",
  projectId: "mini-events-8c365",
  storageBucket: "mini-events-8c365.appspot.com",
  messagingSenderId: "382201375743",
  appId: "1:382201375743:web:7fb9ae3048f2311add55ca"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);