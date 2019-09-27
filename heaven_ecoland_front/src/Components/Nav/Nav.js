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
      <div className="Navbar">
        <Link to="/">
          <h2 className="logo">Heaven Ecoland</h2>
        </Link>
        <input type="checkbox" id="chk" />
        <label for="chk" className="show-menu-btn">
          <i className="fas fa-ellipsis-h"></i>
        </label>

        <ul className="menu">
          <Link to="/blogpage" className="Nav_Link">
            Blog
          </Link>
          <Link to="/eventpage" className="Nav_Link">
            Event
          </Link>
          <Link to="/gallerypage" className="Nav_Link">
            Gallery
          </Link>
          <Link to="/contactus" className="Nav_Link">
            Contact
          </Link>
          <label for="chk" className="hide-menu-btn">
            <i className="fas fa-times"></i>
          </label>
        </ul>
      </div>
      // ----------------------------nav keep--------------------------------------
      /* /* <nav className="Nav-container">
        <div className="Left_Nav">
          <Link to="/" className="Left_Nav_Link">
            <h1>Heaven Ecoland</h1>
          </Link>
        </div>
        <div className="Right_Nav">
          <ul>
            <li>
              <Link to="/blogpage" className="Right_Nav_Link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/eventpage" className="Right_Nav_Link">
                Event
              </Link>
            </li>
            <li>
              <Link to="/gallerypage" className="Right_Nav_Link">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="Right_Nav_Link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */
      // ----------------------------nav keep--------------------------------------
    );
  }
}

export default Nav;
