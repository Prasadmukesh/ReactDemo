import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import para1 from './Parah1';
import orderlist from './Orderlist';
import React from 'react';
import Parah1 from './Parah1';
import Orderlist from './Orderlist';
import Card from './Card';
import HelloDics from './HelloDics';
import FavoriteColor from './FavoriteColor';
import Timer from './Timer';
import Garage from './Garage';
import Football from './Football';
import MyGoal from './MyGoal';
import MyGarage from './MyGarage';
import MyForm from './MyForm';

function App() {
  return (
    <>
    
    <h1 style={{backgroundColor: "lightblue"}}>Hello MyStyle!</h1>
    <HelloDics></HelloDics>
    <Heading></Heading>
    <Parah1></Parah1>
    <Card></Card>
    <Orderlist></Orderlist> 
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <FavoriteColor></FavoriteColor>
    <Timer></Timer>
    <Garage></Garage>
    <Football></Football>
    <MyGoal></MyGoal>
  <MyGarage></MyGarage>
  
  <MyForm></MyForm>

  

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
