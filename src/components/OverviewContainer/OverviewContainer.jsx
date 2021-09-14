import React, { Component } from "react";
import styles from "./OverviewContainer.module.css";
import RecipeThumbnail from "../RecipeThumbnail/RecipeThumbnail.jsx";

export default class OverviewContainer extends Component {
  state = { displayedRecipes: [] };

  constructor(props) {
    super(props);
<<<<<<< HEAD
    console.log({ props }, "props i overview");
    this.recipeElements = this.props.recipes.map((recipe) => (
      <RecipeThumbnail recipe={recipe} key={recipe.id} />
=======
    this.recipeElements = props.recipes.map((recipe) => (
      <RecipeThumbnail recipe={recipe} />
>>>>>>> e679ca0... category component
    ));
    this.state.displayedRecipes = this.getNext(this.recipeElements.length); //currently displays all elements at once
  }

  getNext = (n) => {
    return this.recipeElements.splice(0, n);
  };

  render() {
    return (
      <div data-testid="OverviewContainer" className={styles.overview}>
        {this.state.displayedRecipes}
      </div>
    );
  }
}
