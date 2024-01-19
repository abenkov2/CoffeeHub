import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipes = createAsyncThunk('fetchRecipes', async () => {
  const data = await fetch('/pourovers');
  //console.log(data);
  return data.json();
});
// const initialState = {
//   recipes: [],
// };

// const recipesSlice = createSlice({
//   name: 'recipes',
//   initialState,
//   reducers: {
//     recipeAdded(state, action) {
//       state.recipes.push(action.payload);
//     },
//   },
// });
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    loading: false,
    recipes: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.recipes.action.payload;
      state.error = '';
    });

    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.loading = false;
      state.recipes = [];
      state.error = action.error.message;
    });
  },
});

export const selectAllRecipes = (state) => state.recipes;

//export const { recipeAdded } = recipesSlice.actions;

export default recipesSlice.reducer;
