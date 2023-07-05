import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import FavoriteColor from './FavoriteColor';
const myname = "vipin";
let vill = "haryana";
let age = "22";
let a = 5;
let b = 45;
let c = a+b;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <header>
   <h1>MyHeader</h1>
    
  </header>
  <hr></hr>
    <App></App>

  <hr></hr>
    <footer>
      <h2>My Footer</h2>
    </footer>
    
  </>



  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
