import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import "./NavStyle.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <div className="navbar">
      <div className="leftside">
        <h1>Logo</h1>
      </div>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>

          <Link to="/appetizer">Appetizers</Link>

          <Link to="/main_course">Main courses</Link>

          <Link to="/dessert">Desserts</Link>
        </div>
        <div className="hamburger">
          <Hamburger toggled={showLinks} toggle={setShowLinks} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
