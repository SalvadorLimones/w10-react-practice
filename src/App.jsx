import {useState} from 'react';

const App = () => {
  
  let [currentPage, switchPage] = useState("Home Page");

  return (
    <div>
      <p>Hello!</p>
      <button onClick={() => switchPage("Home Page")}>Home Page</button>
      <button onClick={() => switchPage("Landing Page")}>Landing Page</button>
      <button onClick={() => switchPage("About Page")}>About Page</button>
      <h1>{currentPage}</h1>
    </div>
  )
}

export default App;

        