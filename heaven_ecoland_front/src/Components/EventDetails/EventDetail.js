import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { Card } from "react-bootstrap";

// ----------SCSS--------------
import "./EventDetail.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import BundleCard from "../bundleCard/bundleCard.js";
//---------IMPORTED COMPONENTS--------------

const EventDetails = ({ ...props }) => {
  // -----------EVENTDATA STATE-------------
  const [event, setEvent] = useState([]);
  // -----------EVENTDATA STATE-------------

  // -----------SLIDER STATE-------------
  const [responsive, setResponsive] = useState({
    0: { items: 1 },
    512: { items: 2 },
    1024: { items: 3 }
  });
  // -----------SLIDER STATE-------------

  const [bundles, setBundle] = useState([
    { name: "A3de Ta7t l Shajra", price: "12", description: "Eat with shajra" },
    { name: "A3de Fo2 l Shajra", price: "16", description: "Fly with Shajra" },
    { name: "A3de Ma3 l Shajra", price: "100", description: "Die with Shajra" },
    { name: "A3de Ma3 l Shajra", price: "100", description: "Die with Shajra" },
    { name: "A3de Ma3 l Shajra", price: "100", description: "Die with Shajra" }
  ]);

  /**
   * @method useEffect -an alternative to didComponentMount
   */
  useEffect(() => {
    getEvent(props.match.params.id);
  }, []);


  

  /**
   * @function getEvent -get event data depending on it's id and store in state event
   * @param {int} id
   */
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
      setEvent(result[0]);
    } catch (err) {
      console.log(err);
      throw new Error(`getting event with id = ${id} failed`);
    }
  };
  return (
    <div className="EventDetails">
      <div className="event-container">
        <div className="image">
          <img
            src="http://www.vacationrentalsindia.com/sadmin/images/gallery/p1bs87ld4a1dkghhv1ef91slm1f6tt.jpg"
            alt="Event Image"
          />
        </div>
        <div className="details">
          <div className="first-details">
            <div className="event-date">
              <time>
                Date: <span>{event.date}</span>
              </time>
            </div>
            <div className="event-title">
              <h1>{event.title}</h1>
            </div>
          </div>
          <div className="event-info">
            <div className="event-description">
              <p>{event.description}</p>
            </div>
            <div className="event-bundles">
              <h2 className="bundle-center">Bundles</h2>
              <div className="bundle-cards">
                <AliceCarousel
                  mouseDragEnabled
                  buttonsDisabled={true}
                  infinite={false}
                  responsive={responsive}
                >
                  {bundles.map(bundle => (
                    <BundleCard
                      name={bundle.name}
                      description={bundle.description}
                      price={bundle.price}
                    />
                  ))}
                </AliceCarousel>
              </div>
            </div>
            <div className="price">
              <p>
                Total Price: $<span>{event.price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

{
  /* <div className="image">
        <img
          src="http://www.vacationrentalsindia.com/sadmin/images/gallery/p1bs87ld4a1dkghhv1ef91slm1f6tt.jpg"
          alt="Event Image"
        />
      </div>
      <div className="details">
        <div className="first-details">
          <div className="event-date">
            <time>Date: {event.date}</time>
          </div>
          <div className="event-title">
            <p>{event.title}</p>
          </div>
        </div>
        <div className="bundles-description">
          <div className="event-bundles">
            <p>Bundles</p>
            {bundles.map(bundle => (
              <BundleCard
                name={bundle.name}
                description={bundle.description}
                price={bundle.price}
              />
            ))}
          </div>
          <div className="event-description">
            <p>{event.description}</p>
            <p>Total Price:${event.price}</p>
          </div>
        </div>
      </div> */
}
