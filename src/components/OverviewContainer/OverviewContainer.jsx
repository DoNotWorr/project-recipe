import React, { Component } from "react";
import styles from "./OverviewContainer.module.css";
import RecipeThumbnail from "../RecipeThumbnail/RecipeThumbnail.jsx";

export default class OverviewContainer extends Component {
  getNext = (n) => {
    return this.recipeElements.splice(0, n);
  };

  render() {
    const elements = this.props.recipes.map((recipe) => (
      <RecipeThumbnail recipe={recipe} key={recipe.id} />
    ));
    return (
      <div data-testid="OverviewContainer" className={styles.overview}>
        {elements}
      </div>
    );
  }
}
