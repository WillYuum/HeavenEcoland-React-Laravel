import React from "react";
import { Link } from "react-router-dom";

// ----------SCSS--------------
import "./Event.scss";
// ----------SCSS--------------

const EventCard = ({
  eventId,
  price,
  image,
  date,
  title,
  description,
  getEventId
}) => {
  const renderEventCard = () => {
    return (
      <div className="EventCard-container">
        <div className="priceTag">${price}</div>
        <img
          className="event-img"
          src={image}
          width="300px"
          height="300px"
        />
        <div className="description-warper">
          <time className="time">{date}</time>
          <h2 className="event-title">{title}</h2>
          <div className="description">{description} </div>
          <div class="more">  <Link  class ="more" to={`/event/${eventId}`} onClick={()=>{getEventId(eventId)}}>More Info</Link></div>
        </div>
      
      </div>
    );
  };
  return renderEventCard();
};

export default EventCard;
