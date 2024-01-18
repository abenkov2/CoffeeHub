import React from 'react';

import RecipesList from '../features/recipes/RecipesList';

const MainContainer = () => {
  return (
    <div>
      <h1>Welcome to CoffeeHub!</h1>
      <section>
        <RecipesList />
      </section>
    </div>
  );
};

export default MainContainer;
