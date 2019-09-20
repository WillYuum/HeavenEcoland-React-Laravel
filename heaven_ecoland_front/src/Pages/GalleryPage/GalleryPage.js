import React, { Component } from "react";

// ----------SCSS--------------
import "./GalleryPage.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import GalleryCard from "../../Components/GalleryCard/GalleryCard.js";
//---------IMPORTED COMPONENTS--------------

class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="galleryPage-container">
        <GalleryCard />
      </div>
    );
  }
}

export default GalleryPage;
