import React, { useState, useEffect } from "react";

import { Jumbotron } from "react-bootstrap";

// ----------SCSS--------------
import "./EventDetail.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import BundleCard from "../bundleCard/bundleCard.js";
//---------IMPORTED COMPONENTS--------------

const EventDetails = ({ match }) => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    getEvent(match.params.id);
  }, [event]);

  const getEvent = async id => {
    if (!id) {
      throw new Error("The id is missing");
    }
    try {
      const req = await fetch(`http://127.0.0.1:8000/api/event/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const result = await req.json();
      setEvent(result);
      console.log(event);
    } catch (err) {
      console.log(err);
      throw new Error(`getting event with id = ${id} failed`);
    }
  };
  return (
    <div className="EventDetails">
      <div className="image"></div>
      <div className="details">
        <div className="first-details">
          <div className="event-date">
            <time>{event.date}</time>
          </div>
          <div className="event-title">
            <p>{event.title}</p>
          </div>
        </div>
        <div className="event-bundles">
          <BundleCard />
        </div>
        <div className="event-description">
          <p>{event.description}</p>
          <p>Total Price:{event.price}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
