import React from "react";

// ----------SCSS--------------
import "./GalleryCard.scss";
// ----------SCSS--------------

const GalleryCard = ({ srcImage }) => {
  return (
    <div className="image-card">
      <img
        className="galleryImage"
        src={`http://127.0.0.1:8000/heaven_ecoland_back\ecoland_back/public/images/${srcImage}`}
      />
    </div>
  );
};

export default GalleryCard;
