import React, { Component } from "react";

// ----------SCSS--------------
import "./ContactUsPage.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import ReachUs from "../../Components/Reach Us/ReachUs.js";
//---------IMPORTED COMPONENTS--------------

class ContactUsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contactUsPage-container">
        <div className="contactUs-Title">
          <h1>ContactUs</h1>
        </div>
        <div className="contactUs-display">
          <div className="Contact_Information">
            <h2>Contact:</h2>
            <h4>71 153 141</h4>
            <br />

            <h2>Address:</h2>
            <h4>
              Wadi El Sitt, Damour River
              <br />
              Wadi El Sitt 1503 3054 <br />
              Lebanon
            </h4>
            <br />

            <h2>Business Hours:</h2>
            <h4>24/7</h4>
            <br />
          </div>
          <ReachUs />
        </div>
      </div>
    );
  }
}

export default ContactUsPage;
