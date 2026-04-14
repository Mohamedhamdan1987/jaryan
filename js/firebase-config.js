// Firebase v9+ Modular SDK Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8_Nxr9mQxR2iuOjncCxoin6vlsyLKOOY",
    authDomain: "jaryan-sewage.firebaseapp.com",
    databaseURL: "https://jaryan-sewage-default-rtdb.firebaseio.com",
    projectId: "jaryan-sewage",
    storageBucket: "jaryan-sewage.firebasestorage.app",
    messagingSenderId: "1004220530715",
    appId: "1:1004220530715:web:5a535db16e9437ddc6b8be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
