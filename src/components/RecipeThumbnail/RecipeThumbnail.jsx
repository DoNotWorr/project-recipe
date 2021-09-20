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
    const sliderStyle = this.props.sliderStyle;
    const style = !sliderStyle ? styles.thumbnail : styles.slider;

    return (
      <Link to={`/recipe/${recipe.id}`}>
        <div
          className={style}
          data-testid="recipeThumbnail"
          style={{
            backgroundImage: `url(${recipe.images.small})`,
            backgroundSize: "cover",
          }}>
          {!sliderStyle && <h3>{recipe.name}</h3>}
        </div>
      </Link>
    );
  }
}
