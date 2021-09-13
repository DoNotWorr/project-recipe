import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MainCourse from "./components/MainCourse";
import Appetizer from "./components/Appetizer";
import Dessert from "./components/Dessert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const JSON_LOCAL_PATH = "./recipes.json";

class App extends Component {
  state = { recipes: undefined };

  async getData(path) {
    try {
      const response = await fetch(path);
      const message = await response.json();
      return message.recipes;
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    const recipes = await this.getData(JSON_LOCAL_PATH);
    this.setState({ recipes: recipes });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/appetizer" component={Appetizer}>
              {this.state.data && <Appetizer data={this.state.data} />}
            </Route>
            <Route path="/main_course" component={MainCourse}>
              {this.state.data && <MainCourse data={this.state.data} />}
            </Route>
            <Route path="/dessert" component={Dessert}>
              {this.state.data && <Dessert data={this.state.data} />}
            </Route>
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
