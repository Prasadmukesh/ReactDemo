import React from "react";
import { ReactDOM } from "react";
function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
      <div style={{backgroundColor:"#552288"}}>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
        </div>
      </>
    );
  }
  export default Garage;
  /*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/
