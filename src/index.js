  
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { initializeApp } from "@firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD21woL6mg7-j-yLJhJ_6M-0AlVL8s45Vs",
  authDomain: "herbmed-f48db.firebaseapp.com",
  databaseURL: "https://herbmed-f48db-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "herbmed-f48db",
  storageBucket: "herbmed-f48db.appspot.com",
  messagingSenderId: "798029530520",
  appId: "1:798029530520:web:efa97a6e772119e1dcd7ed",
  measurementId: "G-F09RL23GRN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const DATABASE_URL = firebaseConfig.databaseURL

ReactDOM.render(<App />, document.querySelector('#root'))