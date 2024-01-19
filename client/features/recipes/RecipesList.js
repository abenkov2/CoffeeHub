import { useSelector } from 'react-redux';
import { selectAllRecipes } from './recipesSlice.js';
import React from 'react';

import Recipe from '../../../components/Recipe.jsx';

const RecipesList = () => {
  // const getRecipesOnClick = () => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchRecipes());
  //   }, []);
  // };
  const recipes = useSelector(selectAllRecipes);
  console.log(recipes.recipes);
  const renderedRecipes = recipes.recipes.map((recipe) => (
    <Recipe
      key={recipe.id}
      brew_method={recipe.brew_method}
      roast_level={recipe.roast_level}
      grind_size={recipe.grind_size}
      ratio={recipe.ratio}
      temp={recipe.temp}
      instructions={recipe.instructions}
    />
  ));
  return (
    <div>
      <h2>Recipes</h2>
      {renderedRecipes}
    </div>
  );
};

export default RecipesList;
