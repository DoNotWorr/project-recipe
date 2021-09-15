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

  // async getData(path) {
  //   try {
  //     const response = await fetch(path);
  //     const message = await response.json();
  //     return message.recipes;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async componentDidMount() {
  //   const recipes = await this.getData(JSON_LOCAL_PATH);
  //   this.setState({ recipes: recipes });
  // }
  getRecipeById = (id) => {
    const result = this.state.recipes.filter((recipe) => recipe.id === id);
    if (result.isEmpty) {
      console.log("cannot find matching id");
    } else {
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
        {/* {this.state.recipes && <Recipe recipe={this.state.recipes[1]} />} */}
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
            <Route
              path="/recipe/:id"
              render={({ match }) => (
                <Recipe recipe={this.getRecipeById(match.param.id)} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
