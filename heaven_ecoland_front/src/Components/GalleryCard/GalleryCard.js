import React from "react";

// ----------SCSS--------------
import "./GalleryCard.scss";
// ----------SCSS--------------

const GalleryCard = ({ srcImage }) => {
  console.log(srcImage);
  return (
    <div className="image-card">
      <img
        className="galleryImage"
        src={`/public/images/${srcImage}`}
        crossOrigin="anonymous"
        alt="something went wrong"
      />
    </div>
  );
};

export default GalleryCard;
