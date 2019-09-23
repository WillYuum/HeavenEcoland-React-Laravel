import React from "react";
import { Link } from "react-router-dom";

// ----------SCSS--------------
import "./Event.scss";
// ----------SCSS--------------

const EventCard = ({ id, price, ImageSrc, date, eventTitle, discription }) => {
  return (
    <div className="EventCard-container">
      <div className="priceTag">${price}</div>
      <img className="event-img" src={ImageSrc} width="300px" height="300px" />
      <div className="description-warper">
        <time className="time">{date}</time>
        <h2 className="event-title">{eventTitle}</h2>
        <div className="discription">{discription}</div>
      </div>
    </div>
  );
};

export default EventCard;
