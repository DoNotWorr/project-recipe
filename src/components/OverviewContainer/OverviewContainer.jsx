import React, { Component } from "react";
import styles from "./OverviewContainer.module.css";
import RecipeThumbnail from "../RecipeThumbnail/RecipeThumbnail.jsx";

/**
 * Contains a grid of recipe thumbnails.
 *
 * Props.recipes - list of recipes
 */
export default class OverviewContainer extends Component {
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
