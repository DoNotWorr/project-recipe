import React, { Component } from "react";
import styles from "./Header.module.css";
/*This class contains the hero-banner to be reused in every page except for "recipes"*/

export default class Header extends Component {
  render() {
    const title = this.props.text;
    const backgroundImage = this.props.image;
    return (
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}
