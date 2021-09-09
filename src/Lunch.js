import React, { Component } from "react";
import "./App.css";

class Lunch extends Component {
  render() {
    const data = this.props.data;
    console.log(data);

    return (
      <>
        <h1>Lunch-page</h1>

        <div>
          {/* ändra recipies till rättstavat när vsc har uppdaterats */}
          {data.recipies.map((recipe) => (
            <h1>{recipe.name}</h1>
          ))}
        </div>
      </>
    );
  }
}

export default Lunch;
