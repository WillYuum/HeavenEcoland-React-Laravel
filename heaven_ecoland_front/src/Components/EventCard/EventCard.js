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
  const [eventsData, setEventData] = useState({});

  const handleChange=event =>{
    
      const target= event.target;
    const value= target.value;
    const name= target.name;
  setEventData({
[name]:value

    });
  }
   const handleSubmit=event=>{
     event.preventDefault();
 updateEvent(eventId,eventsData);

   }
  const ViewEventCard = () => {

    

 
  
    console.log("here", image);
    return (
      <div className="EventCard-container">
        <div className="priceTag" >${price}</div>
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
        <form  onSubmit={handleSubmit} method="PUT">
        <input type="file" className="imageUpload"  onChange={handleChange}  name="image" />
        <img className="event-img" src={image} width="300px" height="300px" />
        <div className="description-warper">
          <input className="EDIT-event-date" type="date" defaultValue={date}  onChange={handleChange} name="date" />
          <input type="text" className="EDIT-event-title" defaultValue={title} onChange={handleChange} name="title"/>
          <input type="text" className="EDIT-event-description" defaultValue={description} onChange={handleChange} name="description"/>
          
          
           
              <input type="submit" className="submit"  value ="submit"/>
         
          </div>
          </form>
        </div>
 
    );
  };
  console.log("focuse here", editMode);
  return editMode ? EditEventCard() : ViewEventCard();
};

export default EventCard;
