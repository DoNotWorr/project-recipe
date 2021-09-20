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
      <Link to={`/recipe/${recipe.id}`}>
        <div
          className={styles.thumbnail}
          data-testid="recipeThumbnail"
          style={{
            backgroundImage: `url(${recipe.images.small})`,
            backgroundSize: "cover",
          }}>
          <h3 className={styles.recipeName}>{recipe.name}</h3>
        </div>
      </Link>
    );
  }
}
