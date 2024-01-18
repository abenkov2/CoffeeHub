import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    recipeAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllRecipes = (state) => state.recipes;

export const { recipeAdded } = recipesSlice.actions;

export default recipesSlice.reducer;
