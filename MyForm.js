import { useState } from "react";
import ReactDOM from 'react-dom/client';
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
const formstyle={
    color: "white",
    backgroundColor: "gray",
    padding: "10px",
    fontFamily: "Sans-Serif",
    height:"300px",
    with:"200px",
    textAlign:"center"

  };
function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const shoot = () => {
    alert("Great Job!");
  }
  /*const work= () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
  }*/
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }
  return (
    
    <form style={formstyle}>
        <h1>User Registration Form</h1>
      <label>Enter your name: </label>
      <br></br>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
         <label>Enter your Email: </label>
         <br></br>
      <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
         <label>Enter your Phone: </label>
         <br></br>
        <input
          type="text" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br></br>
        <br></br>
        <input type="button" 
        value={"Submit"}
        onClick={shoot}/>
      <br></br>
      <br></br>
      <input type="button" 
        value={"Showmyname"}
        onClick={handleSubmit}/>
    </form>
  )
}
export default MyForm;