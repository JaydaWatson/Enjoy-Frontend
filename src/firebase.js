import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail, 
    signOut, } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMKpGRrtRHBDshnK6RYC2KmV98lnhGLgo",
    authDomain: "react-enjoythemomentmassage.firebaseapp.com",
    projectId: "react-enjoythemomentmassage",
    storageBucket: "react-enjoythemomentmassage.appspot.com",
    messagingSenderId: "396516399815",
    appId: "1:396516399815:web:67eb338702365dbb89fce2",
    measurementId: "G-N4W1HJDV7Z"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    logInWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordReset,
    sendPasswordResetEmail,
    logout,
};
