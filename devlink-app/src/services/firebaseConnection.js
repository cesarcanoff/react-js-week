import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHyVwF_hG0auJLjSi73m14U6nfM4DR2yI",
  authDomain: "devlinks-e90a9.firebaseapp.com",
  projectId: "devlinks-e90a9",
  storageBucket: "devlinks-e90a9.appspot.com",
  messagingSenderId: "981918991217",
  appId: "1:981918991217:web:928f2aa5f80e35536cacd0",
  measurementId: "G-GYMGWJR91Y",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFireStore(firebaseApp);
const auth = getAuth(firebaseApp);

export { de, auth };
