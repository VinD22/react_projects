import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {


    fetchAdvice()

  }, [])


  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        const { advice } = res.data.slip;
        console.log(advice)
        setAdvice(advice)
      }).catch((error) => {
        console.log(error)
      })

  }

  return (
    <div className="App">
      {advice}
    </div>
  );
}

export default App;
