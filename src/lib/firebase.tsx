// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6jWdnoW6Xu0sr1pYsY-IYqdlRM2a0DJ4",
  authDomain: "scanqr-d39a6.firebaseapp.com",
  projectId: "scanqr-d39a6",
  storageBucket: "scanqr-d39a6.firebasestorage.app",
  messagingSenderId: "331153233011",
  appId: "1:331153233011:web:d8f06e39f26bb9cb5e4606",
  measurementId: "G-7W8RN44BJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);