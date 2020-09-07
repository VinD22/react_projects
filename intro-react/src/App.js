import React from 'react';
import './App.css';

import Documentation from "./Documentation";

function App() {

  const textToDisplay = "https://www.youtube.com/playlist?list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN"

  return (
    <div className="App">
      {textToDisplay}
      <Documentation />
    </div>
  );
}

export default App;
