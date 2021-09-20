import React, { Component } from "react";
import styles from "./RecipeThumbnail.module.css";
import { Link } from "react-router-dom";

/**
 * Displays a thumbnail of a recipe which links to the recipe page. Routing is done in App.js
 *
 * props.recipe - recipe to render
 * props.displayTitle - show recipe's title on thumbnail if true
 */
export default class RecipeThumbnail extends Component {
  render() {
    const recipe = this.props.recipe;
    const displayTitle = this.props.displayTitle;

    return (
      <Link to={`/recipe/${recipe.id}`}>
        <div
          className={styles.thumbnail}
          data-testid="recipeThumbnail"
          style={{
            backgroundImage: `url(${recipe.images.small})`,
            backgroundSize: "cover",
          }}>
          {displayTitle ? (
            <h3 className={styles.recipeName}>{recipe.name}</h3>
          ) : (
            " "
          )}
        </div>
      </Link>
    );
  }
}
