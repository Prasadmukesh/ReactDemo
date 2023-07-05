import React from "react";
const imag1="";

function Card(){
    return(
        <>
       <div className="Card">
       <h1 style={{color: "green"}}>Hello Vipin!</h1>
            <div className="Card-info">
            <p>This is vipin Dhingra</p>
            </div>
            <div className="Card-img">
              <img src={imag1} alt="randomimage"/>
            </div>
       </div> 
       </>
       )
}export default Card;