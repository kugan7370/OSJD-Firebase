import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCk1D10728aUe4i5DPpCqyglOeuqpyBlm8",
    authDomain: "osjd-bbbea.firebaseapp.com",
    projectId: "osjd-bbbea",
    storageBucket: "osjd-bbbea.appspot.com",
    messagingSenderId: "753428390518",
    appId: "1:753428390518:web:2dd9515fc189ea36ba3557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth, storage };