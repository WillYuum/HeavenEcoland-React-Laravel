import React, { Component } from "react";

// ----------SCSS--------------
import "./ReachUs.scss";
// ----------SCSS--------------

class ReachUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ReachUs Container">
        <div class="mapouter">
          <div className="gmap_canvas">
            <iframe
             width="600px"
             height="450px"
              className="gmap_canvas"
              src="https://maps.google.com/maps?q=heaven%20ecoland&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ReachUs;
