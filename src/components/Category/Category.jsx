import React, { Component } from "react";
import OverviewContainer from "../OverviewContainer/OverviewContainer";
import styles from "./Category.module.css";

/**
 * Category is the main container for a category page.
 *
 * @const props.category name of the category
 * @const props.recipes list of recipes
 */
export default class Category extends Component {
  render() {
    return (
      <div className={styles.page}>
        {this.props.category && (
          <>
            <OverviewContainer recipes={this.props.recipes} />
          </>
        )}
      </div>
    );
  }
}
