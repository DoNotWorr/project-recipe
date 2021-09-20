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
      <div className={styles.imgContainer}>
        <h2>{recipe.name}</h2>
        <img
          className={styles.image}
          src={recipe.images.big}
          alt={recipe.name}
        />
      </div>

      <div className={styles.ingrContainer}>
        <h3>Ingredients</h3>
        <ul className={styles.ingredients}>
          {recipe.ingredients.map((ingredient) => (
            <li>
              {ingredient.name} {ingredient.quantity} {ingredient.unit}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.instrContainer}>
        <h3>Instructions</h3>
        <ol className={styles.instructions}>
          {recipe.instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
