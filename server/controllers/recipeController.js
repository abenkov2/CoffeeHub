const models = require('../models/recipesModel');

const recipeController = {};

recipeController.getRecipes = async (req, res, next) => {
  try {
    const recipes = await models.Recipe.find();
    console.log(recipes);
    res.locals.recipes = recipes;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in recipeController.getRecipes.',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

recipeController.submitRecipe = async (req, res, next) => {};

module.exports = recipeController;
