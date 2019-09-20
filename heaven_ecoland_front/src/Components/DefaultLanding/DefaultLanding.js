import React, { Component } from "react";

// ----------SCSS--------------
import "./DefaultLanding.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import Hero from "../Hero/Hero.js";
import GalleryCard from "../GalleryCard/GalleryCard.js";
import EventCard from "../EventCard/EventCard.js";
import TestimonialCard from "../TestimonialCard/TestimonialCard.js";
import OurStory from "../Our Story/OurStory.js";
import ReacUs from "../Reach Us/ReachUs.js";
//---------IMPORTED COMPONENTS--------------

class DefaultLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="DefaultLanding-container"></div>;
  }
}

export default DefaultLanding;
