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
      <div className="reachus-container">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              title="Heaven-Ecoland-location"
              width="600"
              height="500"
              className="gmap_canvas"
              src="https://maps.google.com/maps?q=heaven%20ecoland&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ReachUs;
