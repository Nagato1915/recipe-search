import React, { useEffect, useState, useCallback } from 'react';
import { SearchField, Recipe } from './components';
import './App.css';

const App = () => {
  const APP_ID = "0b11b8fc";
  const APP_KEY = "7e5502ebe1e4f8b498e2397ff9701999";

  const [recipes, setRecipes] = useState([]);
  const [search, setSerach] = useState("");
  const [query, setQuery] = useState("chicken");


  const handleSearch = useCallback((e) => {
    setSerach(e.target.value)
  });
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setQuery(search);
  });

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  return(
    <div className="App">
      <SearchField search={search} handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe recipe={recipe} key={recipe.recipe.label} />
        ))}
      </div>
    </div>
  )
}

export default App;
