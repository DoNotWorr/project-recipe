import React, { Component } from "react";
import "../App.css";
import OverviewContainer from "./OverviewContainer/OverviewContainer";

class MainCourse extends Component {
  render() {
    const recipes = this.props.recipes;
    console.log({ recipes });
    return (
      <>
        <h1>Main courses</h1>
        {recipes && <OverviewContainer recipes={recipes} />}
      </>
    );
  }
}

export default MainCourse;
