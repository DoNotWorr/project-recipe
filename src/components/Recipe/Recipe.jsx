import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";

/**
 * Displays a recipe
 *
 * @const id from url /recipes/id
 * @const props.getRecipeById method to fetch a recipe to display
 */
export default function Recipe(props) {
  const { id } = useParams();

  const recipe = props.getRecipeById(id);

  return (
    <div className={styles.recipe}>
      <h1>{recipe.name}</h1>
      <img src={recipe.images.big} alt={recipe.name} />
      <h2>Ingredients</h2>
      <ul className={styles.ingredients}>
        {recipe.ingredients.map((ingredient) => (
          <li>
            <p>
              {ingredient.name} {ingredient.quantity} {ingredient.unit}
            </p>
          </li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol className={styles.instructions}>
        {recipe.instructions.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}
