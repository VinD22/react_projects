import React, { useState, useEffect } from 'react';
import './App.css';
import { SelectSign } from './components /SelectSign';
import { SelectTimeFrame } from './components /SelectTimeFrame'
import { Horoscope } from './components /Horoscope';

function App() {

  const [selected, setSelected] = useState('')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('')

  const restart = () => {
    setSelected('')
    setSelectedTimeFrame('')
  }

  return (
    <div className="App">
      <h2>Horoscope</h2>
      {!selected && (
        <SelectSign onSignSelected={setSelected} selected={selected} />
      )}

      {selected && !selectedTimeFrame && (
        <SelectTimeFrame onTimeFrameSelected={setSelectedTimeFrame} />
      )}

      {selectedTimeFrame && selected && <Horoscope sign={selected} timeFrame={selectedTimeFrame} />}

      <button onClick={restart}>Reset</button>

    </div>
  );
}

export default App;