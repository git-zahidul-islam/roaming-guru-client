// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlwuVhAUCqWUAT5GtLlW2Htrv6YOTSK4c",
    authDomain: "roaming-guru.firebaseapp.com",
    projectId: "roaming-guru",
    storageBucket: "roaming-guru.appspot.com",
    messagingSenderId: "73107990893",
    appId: "1:73107990893:web:3cb498d792fd72eca19264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)