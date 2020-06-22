import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom' // Switch,Link


import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import Nav from "./Nav";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={ComponentOne} />
        <Route path="/two">
          <ComponentTwo text="hello from app" />
        </Route>
      </div>
    </Router>
  );
}

export default App;
