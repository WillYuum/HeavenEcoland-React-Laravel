import React, { Component } from "react";

// ----------SCSS--------------
import "./ContactUsPage.js";
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
        <ReachUs />
      </div>
    );
  }
}

export default ContactUsPage;
