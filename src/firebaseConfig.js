import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBfGU0HUivDTMTzrpTD64QVa5l2w8wGODc",
    authDomain: "yoga-studio-820c8.firebaseapp.com",
    projectId: "yoga-studio-820c8",
    storageBucket: "yoga-studio-820c8.appspot.com",
    messagingSenderId: "788220705784",
    appId: "1:788220705784:web:8ff8f76efa6b6cb3be340d",
    measurementId: "G-77CXVW48X5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

export default app;