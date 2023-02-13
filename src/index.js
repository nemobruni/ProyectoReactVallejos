import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3f-fc-Ciq-5gCGeFEzZN6bThSOBk79Ck",
  authDomain: "le-peticha.firebaseapp.com",
  projectId: "le-peticha",
  storageBucket: "le-peticha.appspot.com",
  messagingSenderId: "993008852294",
  appId: "1:993008852294:web:65c0f2c02b8386a6449947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
