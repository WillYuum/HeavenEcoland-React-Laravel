import React, { Component } from "react";

// ----------SCSS--------------
import "./OurStory.scss";
// ----------SCSS--------------

class OurStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="OurStory-container">
        <div>
          <h2>Our Story</h2>
          <p className="storySlogan">A place to reconnect with Nature</p>
        </div>

        <div className="story">
          <p>
            Heaven Ecoland is always open to have you with us, just make sure
            you call in advance to reserve your spot. Heaven Ecoland is
            environmental friendly so make sure you respect nature and abide by
            some of the humble rules we have <br /> - Keep it clean ( we can
            provide you with trash bags)
            <br /> - Keep it down, noise and loud music can annoy neighboring
            campers.
            <br /> - Make sure you light up the fire in the right place and turn
            it off before leaving.
          </p>
        </div>
      </div>
    );
  }
}

export default OurStory;
