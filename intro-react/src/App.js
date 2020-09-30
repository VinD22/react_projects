import React, { useState } from 'react';
import './App.css';

import Documentation from "./Documentation";

function App() {

  const [count, setCount] = useState(0);
  const cities = ["new york", "london", "california"];


  const textToDisplay = "https://www.youtube.com/watch?v=SbwtUHxRej8&ab_channel=AnthonySistilli"

  return (
    <div className="App">
      Things to learn : JSX, props, states, useEffect, external libraries.
      <Documentation link={textToDisplay} />
      <br />
      <br /><br />

      {count}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)} >Increment</button>
    
      <button onClick={() => setCount(count - 1)} >Decrement</button>
    
      {
        cities.map((city, index) => {
          return (
            <p key={index}>{city}</p>
          )
        })
      }

    </div>


  );
}

export default App;
