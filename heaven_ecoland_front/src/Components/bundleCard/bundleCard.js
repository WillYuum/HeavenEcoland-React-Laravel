import React from "react";

// ----------SCSS--------------
import "./bundle.scss";
// ----------SCSS--------------

const BundleCard = ({ name, description, price }) => {
  return (
    <div className="bundleCard">
      <div className="bundleCard-content">
        <div className="bundle-left">
          <div className="bundle-name">
            <p>{name}</p>
          </div>
          <div className="bundle-description">
            <p>{description}</p>
          </div>
        </div>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default BundleCard;
