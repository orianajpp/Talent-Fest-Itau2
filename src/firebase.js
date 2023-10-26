import {
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
} from 'firebase/auth';
import { auth } from './firebaseConfig';



/* export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password); */

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
export const emailVerification = (user) => sendEmailVerification(user);
  
export const logOut = (navigate) => signOut(auth, navigate);
  