import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from "./component/Recipe"
import Alert from "./component/Alert";

function App() {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "3893975f";
  const APP_KEY = "937cbc3d9d7dc80f0d29e1ba5744e485";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits)
      setQuery('');
      if (result.data.hits.length === 0) {
        setAlert("No result found")
      } else {
        setAlert('')
      }
    } else {
      setAlert("Please enter food name");
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    getData()

  }

  const onQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1> Food Searching App</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input type="text" placeholder="Seach for food" autoComplete="off" onChange={onQueryChange} value={query} />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe, i) => <Recipe recipe={recipe} key={i} />)}

      </div>
    </div>
  );
}

export default App;
