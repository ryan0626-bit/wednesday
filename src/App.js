import Recipe from "./recipe"
import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
    
  const APP_ID = '1357cbe5';
  const APP_KEY = '6f128c11cba5719b1ac8e2eb39d6c422'	
 
const [recipes, setRecipes]= useState([]);
const [search, setSearch] = useState('')
const [query, setQuery] = useState('chicken')

useEffect(() => {
getRecipes()
}, [query]);
  
const getRecipes = async() => {
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecipes(data.hits);
console.log(data.hits)
}

const updateSearch = e => {
  setSearch(e.target.value)

}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
setSearch("");
}

return (
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="serch-button" type="submit">
        search
      </button>
    </form>
    {recipes.map((recipe) => (
      <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
      />
    ))}
    <h1>Hello</h1>
  </div>
);

}


export default App;
