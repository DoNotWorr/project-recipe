import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";
import data from "./data/recipes.json";
import Category from "./components/Category/Category";

// Constants used for category names and also to filter recipes (must match the data source)
const APPETIZER = "Appetizers";
const MAIN_COURSE = "Main Courses";
const DESSERT = "Desserts";

export default class App extends Component {
  state = { recipes: data.recipes };

  /**
   * Filters recipes in state by id.
   *
   * @param {*} id
   * @returns recipe (if it exists)
   */
  getRecipeById = (id) => {
    const result = this.state.recipes.filter((recipe) => recipe.id === id);
    if (result.length <= 0) {
      console.log("cannot find matching id");
    } else {
      return result[0];
    }
  };

  /**
   * Filters a list of recipes by category
   *
   * @param {*} recipes list of recipes
   * @param {String} category name of category (case sensitive)
   * @returns list of recipes with given category
   */
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
