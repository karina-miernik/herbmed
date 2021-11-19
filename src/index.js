  
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { initializeApp } from "@firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDt0pwyDI5XmTlFcKyNqLQuM-wKIdUqJuI",
  authDomain: "herbmed-app-ccdeb.firebaseapp.com",
  databaseURL: "https://herbmed-app-ccdeb-default-rtdb.firebaseio.com/",
  projectId: "herbmed-app-ccdeb",
  storageBucket: "herbmed-app-ccdeb.appspot.com",
  messagingSenderId: "536625217059",
  appId: "1:536625217059:web:e9d3ccf9d853ee8498fb96",
  measurementId: "G-CNLDSPNB4V"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const DATABASE_URL = firebaseConfig.databaseURL

ReactDOM.render(<App />, document.querySelector('#root'))