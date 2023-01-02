import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgOQ-GUzEqW9Y6pL-HKTx3VTCtuV5jJFM",
  authDomain: "blog-livro.firebaseapp.com",
  projectId: "blog-livro",
  storageBucket: "blog-livro.appspot.com",
  messagingSenderId: "69355951887",
  appId: "1:69355951887:web:9c66287c397b133f1dd07a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };