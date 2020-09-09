import React, { useState } from 'react';
import './App.css';

import Documentation from "./Documentation";

function App() {

  const [count, setCount] = useState(0);

  const textToDisplay = "https://www.youtube.com/playlist?list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN"

  return (
    <div className="App">
      {textToDisplay}
        Things to learn : JSX, props, states, useEffect, external libraries.
      <Documentation />
      <Button onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
