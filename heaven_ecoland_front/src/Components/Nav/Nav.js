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
      <nav className="Nav-container">
        <div className="Left_Nav">
          <Link to="/">
            <h1>Heaven Ecoland</h1>
          </Link>
        </div>
        <div className="Right_Nav">
          <ul>
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
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
