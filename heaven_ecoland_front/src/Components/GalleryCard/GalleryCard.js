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
        src={`http://127.0.0.1:8000/public/images/${srcImage}.png`}
        crossOrigin="anonymous"
        alt="something went wrong"
      />
    </div>
  );
};

export default GalleryCard;
