import React, { Component } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = { email: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up for news letter"); //Todo do something useful instead
  };

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div className={styles.footer}>
        <form
          className={styles.newsLetter}
          onSubmit={this.handleSubmit}
          action="#"
          method="POST">
          <input
            type="submit"
            value="Sign up for News Letter"
            className={`${styles.text} ${styles.button}`}
          />
          <input
            type="email"
            name="email"
            placeholder={this.state.placeholder}
            value={this.state.email}
            onChange={this.handleChange}
          />
        </form>

        <ul className={styles.links}>
          <li>
            <Link to="/" className={styles.text}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.text}>
              Contact
            </Link>
          </li>
          <li>
            <ul className={styles.socialMedia}>
              <li>
                <a href="https://www.facebook.com/">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
