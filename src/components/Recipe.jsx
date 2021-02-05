import React from 'react';
import '../App.css';

const Recipe = ({recipe}) => {
  const calories = recipe.recipe.calories.toFixed(2).toLocaleString()
  return(
    <div className="recipe">  
    <a href={recipe.recipe.shareAs} target="blank">
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt="image" />
    </a>
    <b>{`${calories} cal`}</b>
    </div>
  )
}

export default Recipe;