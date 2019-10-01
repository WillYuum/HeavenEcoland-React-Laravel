import React from "react";

// ----------SCSS--------------
import "./GalleryCard.scss";
// ----------SCSS--------------

const GalleryCard = ({ srcImage }) => {
  console.log("this is the srcImage");
  console.log(srcImage);
  return (
    <div className="image-card">
      <img
        className="galleryImage"
        src={`http://127.0.0.1:8000/images/${srcImage}`}
        crossOrigin="anonymous"
        alt="something went wrong"
      />
    </div>
  );
};

export default GalleryCard;
