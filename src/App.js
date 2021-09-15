import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MainCourse from "./components/MainCourse";
import Appetizer from "./components/Appetizer";
import Dessert from "./components/Dessert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";

import data from "./data/recipes.json";

const JSON_LOCAL_PATH = "./data/recipes.json";

class App extends Component {
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

  render() {
    console.log(this.state.recipes, "i app.js");
    return (
      <div className="App">
        {/* {this.state.recipes && <Recipe recipe={this.state.recipes[1]} />} */}
        <Router>
          <NavBar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appetizer" component={Appetizer}>
              {this.state.recipes && <Appetizer recipes={this.state.recipes} />}
            </Route>
            <Route path="/main_course" component={MainCourse}>
              {this.state.recipes && (
                <MainCourse recipes={this.state.recipes} />
              )}
            </Route>
            <Route path="/dessert" component={Dessert}>
              {this.state.recipes && <Dessert recipes={this.state.recipes} />}
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

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
