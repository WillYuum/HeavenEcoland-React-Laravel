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
    const { editMode, galleryData } = this.props;
    console.log(galleryData)
    return (
      <div className="galleryPage-container">
        {galleryData.map(gallery => {
          return <GalleryCard srcImage={gallery.image} />;
        })}
      </div>
    );
  }
}

export default GalleryPage;
