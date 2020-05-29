import React, { useState, useEffect } from 'react';

import { Loading } from './Loading';

import './App.css';

const App = () => {

  const [cat, setCat] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    getCat()
  }, []);

  const getCat = () => {
    setDone(false)
    setTimeout(() => {
      fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
          setCat(data.file)
          setDone(true)
        })
    }, 1500)
  }

  // style

  const catContainer = {
    maxWidth: '30rem',
    margin: '2rem auto',
  }

  const catImage = {
    width: '100%',
    height: '30rem',
    objectFit: 'cover',
    borderRadius: '5px'
  }

  const btnStyle = {
    background: 'green',
    padding: '0.5rem 1rem',
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer'
  }

  return (
    <div className="app">
      <h3 style={{ marginTop: '3rem' }}>Lottie Animation</h3>
      <button onClick={getCat} style={btnStyle}>Get Random Image</button>
      <div style={catContainer} className="cat-pic">
        {!done ? (
          <Loading />
        ) : (
            <img style={catImage} src={cat} alt="random image" />
          )}
      </div>

    </div>
  );
}

export default App;
