import React from "react";

// ----------SCSS--------------
import "./GalleryCard.scss";
// ----------SCSS--------------

const GalleryCard = ({ srcImage }) => {
  return (
    <div className="image-card">
      <img className="galleryImage" src={srcImage} />
    </div>
  );
};

export default GalleryCard;
