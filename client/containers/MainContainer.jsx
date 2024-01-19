import React, { useEffect, useState } from 'react';

//import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';

import RecipesList from '../features/recipes/RecipesList';
import GetRecipesButton from '../features/recipes/GetRecipesButton';

const MainContainer = () => {
  //const [recipeList, setRecipeList] = useState([]);
  return (
    <div>
      <h1>Welcome to CoffeeHub!</h1>
      <section>
        <GetRecipesButton />
        <RecipesList />
      </section>
    </div>
  );
};

export default MainContainer;
