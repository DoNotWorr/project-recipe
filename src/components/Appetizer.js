import React, { Component } from "react";
import "../App.css";
<<<<<<< HEAD
import OverviewContainer from "./OverviewContainer/OverviewContainer";
=======
import OverviewContainer from "../components/OverviewContainer/OverviewContainer";
>>>>>>> e679ca0... category component

export default class Appetizer extends Component {
  render() {
    const recipes = this.props.recipes;
    return (
      <>
        <h1>Appetizers</h1>
<<<<<<< HEAD
        {recipes && (
          <OverviewContainer
            recipes={recipes.filter(
              (recipe) => recipe.category === "breakfast"
=======
        {this.props.recipes && (
          <OverviewContainer
            recipes={this.props.recipes.filter(
              (recipe) => recipe.category === this.props.category
>>>>>>> e679ca0... category component
            )}
          />
        )}
      </>
    );
  }
}
