import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import styles from "./NavBar.module.css";

/**
 * Contains logo and menu. In mobile version, the menu is a collapsible and has a hamburger button.
 */
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(!isMenuOpen);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.navbar} ref={ref}>
      <h1>Logo</h1>

      <div className={styles.links} id={isMenuOpen ? "hidden" : ""}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/appetizer" onClick={closeMenu}>
          Appetizers
        </Link>

        <Link to="/main_course" onClick={closeMenu}>
          Main courses
        </Link>

        <Link to="/dessert" onClick={closeMenu}>
          Desserts
        </Link>
      </div>

      <div className={styles.hamburger}>
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default NavBar;
