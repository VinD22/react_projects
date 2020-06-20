import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <p>practicing css with before and after pseudo operators </p>
      <br />
      <br />
      <br /> */}

      <div className="box">
        <img src="https://image.flaticon.com/icons/svg/138/138292.svg" alt="coins" />
        <h2>donate</h2>
        <p>Support us <br /> Donate Below</p>

        <a href="#" target="_blank">
          <i className="fab fa-paypal"></i>
          Paypal
        </a>

        <a href="#" target="_blank">
          <i className="fab fa-patreon"></i>
          Patreon
        </a>

      </div>



    </div>
  );
}

export default App;
