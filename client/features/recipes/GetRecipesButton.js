//import { useState } from 'react';

import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { fetchRecipes } from './recipesSlice';

const dispatch = useDispatch();
const GetRecipesButton = () => {
  const getRecipesOnClick = () => {
    useEffect(() => {
      dispatch(fetchRecipes());
    }, []);
  };
  return (
    <div>
      <button onClick={getRecipesOnClick}>Get Pourover Recipes</button>
    </div>
  );
};

export default GetRecipesButton;
