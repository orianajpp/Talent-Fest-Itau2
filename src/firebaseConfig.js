// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { useAuth } from 'reactfire';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwIyzRSUBFOcT2u4GRHJizqYkau6rpPmI",
  authDomain: "talent-fest-itau2.firebaseapp.com",
  projectId: "talent-fest-itau2",
  storageBucket: "talent-fest-itau2.appspot.com",
  messagingSenderId: "421489473320",
  appId: "1:421489473320:web:472d7c9c7327887e76821d",
  measurementId: "G-EMPPF6RLRD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
