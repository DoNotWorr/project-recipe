import React, { Component } from "react";
import OverviewContainer from "../OverviewContainer/OverviewContainer";

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
