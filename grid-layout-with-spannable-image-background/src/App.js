import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters, faRunning, faBed, faDumbbell } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <div className="bg1">
        <h2>16 <span>| 24</span></h2>
        <p>Goals Completed</p>
      </div>
      <div className="bg1">
        <h2><FontAwesomeIcon icon={faBatteryThreeQuarters} /></h2>
        <p>Respiration</p>
      </div>
      <div className="bg2">
        <h2><FontAwesomeIcon icon={faRunning} /></h2>
        <p>Miles</p>
      </div>
      <div className="bg1">
        <h2>36 &deg;</h2>
        <p>Temperature</p>
      </div>
      <div className="bg1">
        <h2><FontAwesomeIcon icon={faBed} /></h2>
        <p>Sleep Keep</p>
      </div>
      <div className="bg2">
        <h2>98 <span>bpm</span></h2>
        <p>Heart Rate</p>
      </div>
      <div className="bg1">
        <h2>170 <span>lbs</span></h2>
        <p>Weight</p>
      </div>
      <div className="bg1">
        <h2>28 <span>%</span></h2>
        <p>Fat Percentage</p>
      </div>
      <div className="bg2">
        <h2>118 <span>mgdl</span></h2>
        <p>Blood Glucose</p>
      </div>
      <div className="bg2">
        <h2>680 <span>kcal</span></h2>
        <p>AVG Consumption</p>
      </div>
      <div className="bg2">
        <h2><FontAwesomeIcon icon={faDumbbell} /></h2>
        <p>Workouts</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
    </div>
  );
}

export default App;
