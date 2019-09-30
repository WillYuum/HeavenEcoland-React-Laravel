import React, { useState } from "react";
import { Link } from "react-router-dom";


// ----------SCSS--------------
import "./Event.scss";
import { object } from "prop-types";
// ----------SCSS--------------

const EventCard = ({
  eventId,
  price,
  image,
  date,
  title,
  description,
  editMode,
  updateEvent,
  ...eventFuncs
}) => {
  const ViewEventCard = () => {

    const [eventData, setEventData] = useState({)

    console.log("here", image);
    return (
      <div className="EventCard-container">
        <div className="priceTag">${price}</div>
        <img className="event-img" src={image} width="300px" height="300px" />
        <div className="description-warper">
          <time className="time">{date}</time>
          <h2 className="event-title">{title}</h2>
          <div className="description">{description} </div>
          <div class="more">
            <Link class="more" to={`/event/${eventId}`}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const EditEventCard = () => {
    return (
      <div className="EventCard-container">
        <div className="EDIT-priceTag">
          <input type="text" />
        </div>
        <input type="file" className="imageUpload"   />
        <img className="event-img" src={image} width="300px" height="300px" />
        <div className="description-warper">
          <input className="EDIT-event-date" type="date" defaultValue={date}  />
          <input type="text" className="EDIT-event-title" defaultValue={title}/>
          <input type="text" className="EDIT-event-description" defaultValue={description}/>
          
          
           
              <input type="submit" className="submit" onClick={updateEvent(


              )
              } value ="submit"/>
          
          </div>
        </div>
 
    );
  };
  console.log("focuse here", editMode);
  return editMode ? EditEventCard() : ViewEventCard();
};

export default EventCard;
