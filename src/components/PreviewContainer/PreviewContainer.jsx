import React, { Component } from "react";
import styles from "./PreviewContainer.module.css";

export default class PreviewContainer extends React.Component {
  render() {
    const recipe = this.props.recipe;
    console.log(recipe.images.small);
    return (
      <>
        <a href="#">
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${recipe.images.small})` }}>
            <h1>{recipe.name}</h1>
          </div>
        </a>
      </>
    );
  }
}
