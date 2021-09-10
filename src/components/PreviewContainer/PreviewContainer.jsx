import React, { Component } from "react";
import styles from "./PreviewContainer.module.css";

export default class PreviewContainer extends React.Component {
  render() {
    const recipe = this.props.recipe;
    return (
      <div data-testid="PreviewContainer">
        <a href="#">
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${recipe.images.small})` }}
            data-testid="backgroundImage">
            <h1>{recipe.name}</h1>
          </div>
        </a>
      </div>
    );
  }
}
