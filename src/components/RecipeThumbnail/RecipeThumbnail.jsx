import React, { Component } from "react";
import styles from "./RecipeThumbnail.module.css";
import { BrowserRouter as Link } from "react-router-dom";

export default class RecipeThumbnail extends Component {
  render() {
    console.log(this.props.recipe, "i thumbnail");
    const recipe = this.props.recipe;

    return (
      <div className={styles.thumbnail} data-testid="recipeThumbnail">
        <Link id={recipe.id} to={`/recipe/${recipe.id}`}>
          <h2>{recipe.name}</h2>
          <img
            className={styles.test}
            src={recipe.images.small}
            alt={recipe.name}
          />
        </Link>
      </div>
    );
  }
}
