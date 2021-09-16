import React, { Component } from "react";
import OverviewContainer from "../OverviewContainer/OverviewContainer";

/**
 * Category is the main container for a category page.
 *
 * @const props.category name of the category
 * @const props.recipes list of recipes
 */
export default class Category extends Component {
  render() {
    return (
      <>
        {this.props.category && (
          <>
            <h2>{this.props.category}</h2>
            <OverviewContainer recipes={this.props.recipes} />
          </>
        )}
      </>
    );
  }
}
