import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/lunch">
            <li>Lunch</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
