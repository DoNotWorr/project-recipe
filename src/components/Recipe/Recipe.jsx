import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    console.log(this.props.recipe, "i recipe-component");
    const recipe = this.props.recipe;
    //const recipe = this.props.recipe.find((recipe) => recipe.id === id);
    //let { id } = this.props.match.params;

    return (
      <>
        <h1>{recipe.name}</h1>
        <img src={recipe.images.big} />
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li>
              {ingredient.name}
              &nbsp;{ingredient.quantity}
              &nbsp;{ingredient.unit}
            </li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <ol>
          {recipe.instructions.map((instruction) => (
            <li>{instruction}</li>
          ))}
        </ol>
      </>
    );

    // <div className={styles.Recipe}>
    //   <div className={styles.bannerimage}></div>
    //   <div className={styles.ingredients}></div>
    //   <div className={styles.instructions}></div>
    // </div>
  }
}
