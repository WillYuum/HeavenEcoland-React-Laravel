import React, { Component } from "react";
import { Link } from "react-router-dom";

// ----------SCSS--------------
import "./Nav.scss";
// ----------SCSS--------------

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="Nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogpage">Blog</Link>
          </li>
          <li>
            <Link to="/eventpage">Event</Link>
          </li>
          <li>
            <Link to="/gallerypage">Gallery</Link>
          </li>
          <li>
            <Link to="/contactus">contact</Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Nav;
