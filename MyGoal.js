
import React from "react";
import { ReactDOM } from "react";

function MissedGoal() {
    return <h1 style={{color:"RED"}}>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1 style={{color:"Blue"}}>Goal!</h1>;
  }
function Goal(props) {

    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  function MyGoal()
  {
    return(
        <Goal isGoal={true}></Goal> 
    )
  }
  
  export default MyGoal;