import React, { useState } from 'react';
import Modal from './components/Modal';

import './App.css';

function App() {

  const [show, setShow] = useState(false);

  const closeModalHandler = () => {
    setShow(false);
  }

  return (
    <div>
      <button onClick={() => setShow(true)} className="btn-openModal" style={{ background: '#2c2c2c', color: 'white', padding: '10px', margin: '2rem', border: 'none', outline: 'none', cursor: 'pointer' }}>Open Modal</button>
      <Modal show={show} closeModalHandler={closeModalHandler} />
    </div>
  );
}

export default App;
