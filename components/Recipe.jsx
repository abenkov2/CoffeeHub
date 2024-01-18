import React from 'react';

const Recipe = (props) => {
    return (
      <div className="recipeBox">
        <p>
          <b>Brew Method:</b> {props.brew_method}
        </p>
        <p>
          <b>Roast Level:</b> {props.roast_level}
        </p>
        <p>
          <b>Grind Size:</b> {props.grind_size}
        </p>
        <p>
          <b>Ratio:</b> {props.ratio}
        </p>
        <p>
          <b>Water Temp:</b> {props.temp}
        </p>
        <p>
          <b>Instructions:</b> {props.instructions}
        </p>
      </div>
    );
};

export default Recipe;