import React, { Component } from "react";
import styles from "./RecipeThumbnail.module.css";
import { Link } from "react-router-dom";

/**
 * Displays a thumbnail of a recipe which links to the recipe page. Routing is done in App.js
 *
 * props.recipe - recipe to render
 */
export default class RecipeThumbnail extends Component {
  render() {
    const recipe = this.props.recipe;

    return (
      <div className={styles.thumbnail} data-testid="recipeThumbnail">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 className={styles.recipeName}>{recipe.name}</h3>
          <img
            className={styles.thumbnailImg}
            src={recipe.images.small}
            alt={recipe.name}
          />
        </Link>
      </div>
    );
  }
}
