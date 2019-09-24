import React from "react";

import { Jumbotron } from "react-bootstrap";

// ----------SCSS--------------
import "./EventDetail.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import BundleCard from "../bundleCard/bundleCard.js";
//---------IMPORTED COMPONENTS--------------

const EventDetails = ({
  ImageSrc,
  price,
  date,
  eventTitle,
  description,
  bundles
}) => {
  return (
    <div className="EventDetails">
      <div className="image"></div>
      <div className="details">
        <div class="first-details">
          <div className="event-date">
            <time>{date}</time>
          </div>
          <div className="event-title">
            <p>{eventTitle}</p>
          </div>
        </div>
        <div className="event-bundles">
          <BundleCard />
        </div>
        <div className="event-description">
          <p>{description}</p>
          <p>Total Price:{price}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
