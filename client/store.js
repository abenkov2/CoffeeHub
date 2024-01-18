import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './features/recipes/recipesSlice';

const store = configureStore({
  reducer: {
    // TODO: reducer function
    recipes: recipesReducer,
  },
});

export default store;
