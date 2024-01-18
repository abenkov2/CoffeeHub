const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pourover_recipes',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  brew_method: String,
  roast_level: { type: String, required: true },
  grind_size: { type: String, required: true },
  ratio: { type: String, required: true },
  temp: { type: String, required: true },
  instructions: { type: String, required: true },
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = { Recipe };
