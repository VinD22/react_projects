import React, { useState } from 'react';
import axios from "axios";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {

  // const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=98385974";
  const apiUrl = "http://www.omdbapi.com/?apikey=98385974";



  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search = e => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s)
        .then(({ data }) => {
          console.log(data.Search); // contains arrays of movies.  
          let result = data.Search;
          setState(prevState => {
            return { ...prevState, results: result }
          })
          console.log(state)
        })
    }
  }

  const handleInput = e => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    })

    // console.log(state.s);
  }

  const openPopup = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      })
    })
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    })
  }


  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
