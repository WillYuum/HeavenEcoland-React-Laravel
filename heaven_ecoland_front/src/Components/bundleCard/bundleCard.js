import React from "react";

// ----------SCSS--------------
import "./bundle.scss";
// ----------SCSS--------------

const BundleCard = ({ name, description, price }) => {
  return (
    <div className="bundleCard">
      <div className="bundle-left">
        <div className="bundle-name">{name}</div>
        <div className="bundle-description">{description}</div>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default BundleCard;
