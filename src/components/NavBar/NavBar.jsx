import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hamburger from "hamburger-react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.leftside}>
        <h1>Logo</h1>
      </div>
      <div className={styles.rightside}>
        <div className={styles.links} id={showLinks ? "hidden" : ""}>
          <Link to="/">Home</Link>

          <Link to="/appetizer">Appetizers</Link>

          <Link to="/main_course">Main courses</Link>

          <Link to="/dessert">Desserts</Link>
        </div>

        <div className={styles.hamburger}>
          <Hamburger toggled={showLinks} toggle={setShowLinks} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
