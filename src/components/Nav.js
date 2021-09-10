import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Logo</h1>
        <ul className="nav-links">
          <Link class="routerLink" to="/">
            <li>Home</li>
          </Link>
          <Link class="routerLink" to="/appetizer">
            <li>Appetizers</li>
          </Link>
          <Link class="routerLink" to="/main_course">
            <li>Main courses</li>
          </Link>
          <Link class="routerLink" to="/dessert">
            <li>Desserts</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
