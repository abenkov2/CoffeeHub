const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const recipeController = require('./controllers/recipeController');

// if (process.env.NODE_ENV === 'production') {
//   // statically serve everything in the build folder on the route '/build'
//   app.use('/build', express.static(path.join(__dirname, '../build')));
//   // serve index.html on the route '/'
//   app.get('/', (req, res) => {
//     return res
//       .status(200)
//       .sendFile(path.resolve(__dirname, '../client/index.html'));
//   });
// }

app.use(express.json());

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/pourovers', recipeController.getRecipes, (req, res) =>
  res.status(200).send(res.locals.recipes)
);

app.post('/pourovers', (req, res) => {});

app.use((req, res) => res.sendStatus(404));

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
