import React from "react";
import { useParams } from "react-router-dom";

export default function Recipe(props) {
  const { id } = useParams();

  const recipe = props.getRecipeById(id);

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
