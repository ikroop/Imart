
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCx3deiY_ue3sIj9W0YEhd9mqfvHwqNS6I",
  authDomain: "imart-5ab80.firebaseapp.com",
  projectId: "imart-5ab80",
  storageBucket: "imart-5ab80.appspot.com",
  messagingSenderId: "943370889966",
  appId: "1:943370889966:web:79d87039a2a8d581aae1ff",
  measurementId: "G-CJXBN7XKYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;