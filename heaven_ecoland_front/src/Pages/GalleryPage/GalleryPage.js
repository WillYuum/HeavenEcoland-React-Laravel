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

  renderAddImage = () => {
    return (
      <form>
        <input name="galleryImage" type="file" />
      </form>
    );
  };

  render() {
    const { editMode, galleryData } = this.props;
    return (
      <div className="galleryPage-container">
        {editMode ? this.renderAddImage() : ""}
        {galleryData.map(gallery => {
          return <GalleryCard srcImage={gallery.image} />;
        })}
      </div>
    );
  }
}

export default GalleryPage;
