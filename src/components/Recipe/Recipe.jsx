import React from "react";

export default function Recipe(props) {
  console.log(props.recipe, "i recipe-component");
  const recipe = props.recipe;

  return (
    <>
      <h1>{recipe.name}</h1>
      <img src={recipe.images.big} alt={recipe.name} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li>
            {ingredient.name}
            &nbsp;{ingredient.quantity}
            &nbsp;{ingredient.unit}
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
    </>
  );
}
