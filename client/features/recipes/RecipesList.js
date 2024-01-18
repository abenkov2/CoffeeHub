import { useSelector } from 'react-redux';
import { selectAllRecipes } from './recipesSlice';
import React from 'react';

import Recipe from '../../../components/Recipe';

const RecipesList = () => {
  const recipes = useSelector(selectAllRecipes);
  const renderedRecipes = recipes.map((recipe) => <Recipe key={recipe.id} />);
  return (
    <div>
      <h2>Recipes</h2>
      {renderedRecipes}
    </div>
  );
};

export default RecipesList;
