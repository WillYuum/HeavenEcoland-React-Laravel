import React from "react";
import { Card, CardDeck } from "react-bootstrap";

// ----------SCSS--------------
import "./TestimonialCard.scss";
// ----------SCSS--------------

const TestimonialCard = ({
  testimonialId,
  image,
  authr,
  date,
  text,
  deleteTestimonial,
  editMode
}) => {
  const ViewTestimonialCard = () => {
    return (
      <div className="testimonialCard-container">
        <button onClick={() => deleteTestimonial(testimonialId)}>X</button>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="top" src={image} />
            </div>
            <div className="flip-card-back">
              <h3 className="authr-name">{authr}</h3>
              <small className="testimonials-date">{date}</small>
              <br />
              <br />
              <p className="testimonials-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EditTestimonialCard = () => {
    return (
      <div className="testimonialCard-container">
        <button onClick={() => deleteTestimonial(testimonialId)}>X</button>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="top" src={image} />
            </div>
            <div className="flip-card-back">
              <h3 className="authr-name">
                <input type="text" defaultValue={authr} />
              </h3>
              <small className="testimonials-date">{date}</small>
              <br />
              <br />
              <p className="testimonials-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return editMode ? EditTestimonialCard() : ViewTestimonialCard();
};
export default TestimonialCard;
