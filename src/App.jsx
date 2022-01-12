import {useState} from 'react';

const App = () => {
  
  let [isHomePage, setToLanding] = useState(true);
  let [currentPage, switchPage] = useState("Home Page");
  const [currentValue, setValue] = useState("");

  const cars = [
    {brand: "Toyota", model: "Yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Mazda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ]

  console.log(currentValue);

  return (
    <div>
      <h1>One button useState switch:</h1>
      <button onClick={() => setToLanding(!isHomePage)}>Click to switch page!</button>
      {isHomePage ? <h3>Home page</h3> : <h3>Landing page</h3>}
      <hr/>

      <h1>3 button useState switch:</h1>
      <button onClick={() => switchPage("Home Page")}>Home Page</button>
      <button onClick={() => switchPage("Landing Page")}>Landing Page</button>
      <button onClick={() => switchPage("About Page")}>About Page</button>
      {/* <h3>{currentPage}</h3> */}
      {currentPage === "Home Page" && <h3>Home Page</h3>}
      {currentPage === "Landing Page" && <h3>Landing Page</h3>}
      {currentPage === "About Page" && <h3>About Page</h3>}

      {currentPage === "About Page" ? <h3>About Page</h3> : currentPage === "Landing Page" ? <h3>Landing Page</h3> : <h3>Home Page</h3>}

      <hr/>

        <input type="text" value={currentValue} onChange={e => setValue(e.target.value)}/>
        <button disabled={currentValue.length<3} onClick={() => console.log(currentValue)}>Submit</button>
        {currentValue.length < 3 && <p>Min 3 char!</p>}
      
      <hr/>
        {cars.map( car => car.brand.startsWith(currentValue) && <div key={car.model}>{car.brand}-{car.model} ({car.topSpeed})</div>)}
    </div>
  )
}

export default App;

        