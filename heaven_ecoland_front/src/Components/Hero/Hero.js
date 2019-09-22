import React, { Component } from "react";

// ----------SCSS--------------
import "./Hero.scss";
// ----------SCSS--------------

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="hero-container">
        <section className="home">
          {/* <!-- slogan --> */}
          <div className="Slogan">
            <h1>Where great things happen</h1>
            {/* <!-- social media icons --> */}
            <div className="social_media">
              <a href="https://www.facebook.com/heavenecoland/" target="_blank">
                <i
                  className="fa fa-4x fa-facebook"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Like us on Facebook"
                ></i>
              </a>
              <br />
              <a
                href="https://www.instagram.com/explore/locations/149529028940477/heaven-ecoland"
                target="_blank"
              >
                <i
                  class="fa fa-4x fa-instagram"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Follow us on Instagram"
                ></i>
              </a>
            </div>
            <p>Campground in Wadi El Sitt</p>
            <p>Available 24/7</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
