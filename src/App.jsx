import {useState} from 'react';

const App = () => {
  
  let [isHomePage, setToLanding] = useState(true);
  let [currentPage, switchPage] = useState("Home Page");

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
      <h3>{currentPage}</h3>
    </div>
  )
}

export default App;

        