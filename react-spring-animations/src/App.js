import React, { useState } from 'react';
import './App.css';
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";


function App() {

  const [showComponentThree, setShowComponentThree] = useState(false);

  const toggle = e => {
    setShowComponentThree(!showComponentThree)
  }

  return (
    <div className="App">
      <ComponentOne />
      <ComponentTwo toggle={toggle} />
      {showComponentThree ? <ComponentThree /> : ''}

    </div>
  );
}

export default App;
