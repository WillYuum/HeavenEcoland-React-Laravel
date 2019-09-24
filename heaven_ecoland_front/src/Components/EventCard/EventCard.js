import React from "react";
import { Link } from "react-router-dom";

// ----------SCSS--------------
import "./Event.scss";
// ----------SCSS--------------

const EventCard = ({
  eventId,
  price,
  ImageSrc,
  date,
  eventTitle,
  discription
}) => {
  const renderEventCard = () => {
    return (
      <div className="EventCard-container">
        <div className="priceTag">${price}</div>
        <img
          className="event-img"
          src={ImageSrc}
          width="300px"
          height="300px"
        />
        <div className="description-warper">
          <time className="time">{date}</time>
          <h2 className="event-title">{eventTitle}</h2>
          <div className="discription">{discription}</div>
        </div>
        <Link to={`/event/${eventId}`}>More Info</Link>
      </div>
    );
  };
  return renderEventCard();
};

export default EventCard;
