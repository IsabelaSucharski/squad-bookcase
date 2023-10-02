import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNBscWX-yuvFOEPPon5bP6d7LNT78CGtg",
  authDomain: "squad-books.firebaseapp.com",
  projectId: "squad-books",
  storageBucket: "squad-books.appspot.com",
  messagingSenderId: "27776213579",
  appId: "1:27776213579:web:22f367ea3779c93e2da3ce",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
