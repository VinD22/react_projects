import React, { useState } from 'react';
import './App.css';

import Documentation from "./Documentation";

function App() {

  const [count, setCount] = useState(0);

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
      <br />
      <br />
      <button onClick={() => setCount(count - 1)} >Decrement</button>
    </div>
  );
}

export default App;
