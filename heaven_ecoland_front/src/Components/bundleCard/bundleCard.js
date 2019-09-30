import React, { useEffect } from "react";

// ----------SCSS--------------
import "./bundle.scss";
// ----------SCSS--------------

const BundleCard = ({ editMode, name, description, price }) => {
  const ViewBundleCard = () => {
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
          <p>Cost: ${price}</p>
        </div>
      </div>
    );
  };

  const editBundleCard = () => {
    return (
      <div className="bundleCard">
        <button>X</button>
        <div className="bundleCard-content">
          <div className="bundle-left">
            <div className="bundle-name">
              <p>{name}</p>
            </div>
            <div className="bundle-description">
              <p>{description}</p>
            </div>
          </div>
          <p>Cost: ${price}</p>
        </div>
      </div>
    );
  };

  return editMode ? editBundleCard() : ViewBundleCard();
};

export default BundleCard;
