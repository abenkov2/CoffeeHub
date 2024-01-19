//import { useState } from 'react';

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchRecipes } from './recipesSlice';

const GetRecipesButton = () => {
  const dispatch = useDispatch();

  const getRecipesOnClick = () => {
    // useEffect(() => {
    //   dispatch(fetchRecipes());
    // }, []);
    dispatch(fetchRecipes());
  };
  return (
    <div>
      <button onClick={getRecipesOnClick}>Get Pourover Recipes</button>
    </div>
  );
};

export default GetRecipesButton;
