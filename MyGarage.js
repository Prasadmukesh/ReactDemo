function Car(props) {
    return <li>I have a { props.brand }</li>;
  }
  
  function MyGarage() {
    const cars = ['Ford', 'BMW', 'Audi',"Hundai","Honda","Tata"];
    return (
      <>
        <h1>My Garage have Following Collection:</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  export default MyGarage;