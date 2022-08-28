import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdU4A6ta-P1s7R6wXdm-zi3lzytQDfxwc",
    authDomain: "tesla-clone-ee2f7.firebaseapp.com",
    projectId: "tesla-clone-ee2f7",
    storageBucket: "tesla-clone-ee2f7.appspot.com",
    messagingSenderId: "616378638950",
    appId: "1:616378638950:web:eb587bb9be2597920a03a7",
    measurementId: "G-HJTV5TY9R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);