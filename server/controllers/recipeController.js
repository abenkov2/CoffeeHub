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

recipeController.submitRecipe = async (req, res, next) => {
  try {
    const { brew_method, roast_level, grind_size, ratio, temp, instructions } =
      req.body;
    await models.Recipe.create({
      brew_method,
      roast_level,
      grind_size,
      ratio,
      temp,
      instructions,
    });
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in recipeController.submitRecipe.',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = recipeController;
