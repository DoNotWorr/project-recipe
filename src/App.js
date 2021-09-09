import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Lunch from "./Lunch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const JSON_LOCAL_PATH = "./recipes.json";

class App extends Component {
  state = { data: undefined };

  getData = (path) => {
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((message) => this.setState({ data: message }))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    const data = this.getData(JSON_LOCAL_PATH);
    this.setState({ data: data });
  }

  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lunch">
            <Lunch data={this.state.data} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
