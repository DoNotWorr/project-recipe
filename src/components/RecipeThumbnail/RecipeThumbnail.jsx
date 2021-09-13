import React, { Component } from "react";
import styles from "./RecipeThumbnail.module.css";

export default class RecipeThumbnail extends React.Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <div className={styles.thumbnail} data-testid="recipeThumbnail">
        <a href="#">
          <h2>{recipe.name}</h2>
          <img
            className={styles.test}
            src={recipe.images.small}
            alt="recipe image"
          />
        </a>
      </div>
    );
  }
}
