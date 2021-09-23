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
        <div className={styles.title}>
          <h2>{recipe.name}</h2>
          <p>
            Some Amazing information about this truly amazing recipe. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Magni qui
            laborum assumenda molestias voluptates voluptatum perferendis
            voluptate odit voluptatibus id! Quibusdam quas qui adipisci. Magni
            libero tempora quos non consequatur.
          </p>
        </div>
        <img
          className={styles.image}
          src={recipe.images.big}
          alt={recipe.name}
        />
      </div>

      <div className={styles.ingredientContainer}>
        <div className={styles.ingredients}>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                {ingredient.name} {ingredient.quantity} {ingredient.unit}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.instructions}>
          <h3>Instructions</h3>
          <ol>
            {recipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
