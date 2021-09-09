import React, { Component } from "react";
import "./App.css";

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
    this.getData(JSON_LOCAL_PATH);
  }

  render() {
    return <></>;
  }
}

export default App;
