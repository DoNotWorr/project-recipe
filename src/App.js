import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";
import data from "./data/recipes.json";
import Category from "./components/Category/Category";

const APPETIZER = "Appetizers";
const MAIN_COURSE = "Main Courses";
const DESSERT = "Desserts";

export default class App extends Component {
  state = { recipes: data.recipes };

  getRecipeById = (id) => {
    const result = this.state.recipes.filter((recipe) => recipe.id === id);
    console.log(this.state.recipes, "this.state.recipes");
    console.log(id, "id för filter");
    console.log(result, "result");

    if (result.length <= 0) {
      console.log("cannot find matching id");
    } else {
      console.log(result[0], "result[0]");
      return result[0];
    }
  };

  filterByCategory = (recipes, category) => {
    return recipes.filter((recipe) => recipe.category === category);
  };

  render() {
    const recipes = this.state.recipes;
    return (
      <div className="App">
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact>
              {recipes && (
                <Category category="Home" recipes={recipes} key="Home" />
              )}
            </Route>
            <Route path="/appetizer">
              {recipes && (
                <Category
                  category={APPETIZER}
                  recipes={this.filterByCategory(recipes, APPETIZER)}
                  key={APPETIZER}
                />
              )}
            </Route>
            <Route path="/main_course">
              {recipes && (
                <Category
                  category={MAIN_COURSE}
                  recipes={this.filterByCategory(recipes, MAIN_COURSE)}
                  key={MAIN_COURSE}
                />
              )}
            </Route>
            <Route path="/dessert">
              {recipes && (
                <Category
                  category={DESSERT}
                  recipes={this.filterByCategory(recipes, DESSERT)}
                  key={DESSERT}
                />
              )}
            </Route>
            <Route path="/recipe/:id">
              <Recipe getRecipeById={this.getRecipeById} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
