import React, { Component } from "react";

// ----------SCSS--------------
import "./Footer.scss";
// ----------SCSS--------------

// ---------ICONS---------------
import facebook from "./icons/facebook_icon.png";
import insta from "./icons/insta_icon.png";
import phone from "./icons/phone.png";
import email from "./icons/email.png";
// ---------ICONS---------------

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer-container">
        <div className="content">
          <div className="socialMedia">
            <p className="socialMedia-Title">Follow us On Social Media</p>
            <div className="socialMedia-Icons">
              <div className="icon">
                <a
                  href="https://www.facebook.com/heavenecoland/"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook icon" />
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.instagram.com/explore/locations/149529028940477/heaven-ecoland"
                  target="_blank"
                >
                  <img src={insta} alt="instagram icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="contactUs">
            <p className="contactus-Title">Contact Us</p>
            <div className="contactUs-Icons">
              <div className="icon">
                <img src={email} alt="phone icon" />
                <p>+961 71 153 141</p>
              </div>

              <div className="icon">
                <img src={email} alt="phone icon" />
                <p className="Gmail_Heaven">heavenecoland@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyRight">
          <p>&copy; Heaven Ecoland</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
