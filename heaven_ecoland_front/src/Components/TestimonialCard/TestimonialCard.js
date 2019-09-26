import React from "react";
import { Card, CardDeck } from "react-bootstrap";


// ----------SCSS--------------
import "./TestimonialCard.scss";
// ----------SCSS--------------

const TestimonialCard = ({ image, authr, date, text }) => {
  return (
    
    <div className="testimonialCard-container">
    
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="top" src={image} />
          </div>
          <div className="flip-card-back">
            <h3 className="authr-name">{authr}</h3>
            <small className="testimonials-date">{date}</small>
            <br/><br/>
            <p className="testimonials-text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
