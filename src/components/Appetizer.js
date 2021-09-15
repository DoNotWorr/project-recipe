import React, { Component } from "react";
import "../App.css";
import OverviewContainer from "./OverviewContainer/OverviewContainer";

class Appetizer extends Component {
  render() {
    const recipes = this.props.recipes;
    return (
      <>
        <h1>Appetizers</h1>
        {recipes && (
          <OverviewContainer
            recipes={recipes.filter(
              (recipe) => recipe.category === "breakfast"
            )}
          />
        )}
      </>
    );
  }
}

export default Appetizer;
