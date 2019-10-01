import React from "react";
import { Card, CardDeck } from "react-bootstrap";

// ----------SCSS--------------
import "./TestimonialCard.scss";
// ----------SCSS--------------

const TestimonialCard = ({ image, authr, date, text, editMode, ...rest }) => {
  const ViewTestimonialCard = () => {
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
              <br />
              <br />
              <p className="testimonials-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SubmitTestimonial = e => {
    e.preventDefault();
    const testimonialImage = e.target.testimonialImag.value;
    const testimonialDate = e.target.testimonialDate.value;
    const testimonialText = e.target.testimonialText.value;
    const testimonialauthr = e.target.testimonialauthr.value;
  };

  const EditTestimonialCard = () => {
    return (
      <div className="testimonialCard-container">
        <form>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <input type="file" name="testimonialImage" />
                <img className="top" src={image} />
              </div>
              <h3 className="authr-name">
                <input
                  name="testimonialauthr"
                  type="text"
                  defaultValue={authr}
                />
              </h3>
              <small className="testimonials-date">
                <input name="testimonialDate" type="date" defaultValue={date} />
              </small>

              <div className="flip-card-back">
                <br />
                <br />
                <p className="testimonials-text">
                  <input
                    name="testimonialText"
                    type="text"
                    defaultValue={text}
                  />
                  {text}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return editMode ? EditTestimonialCard() : ViewTestimonialCard();
};
export default TestimonialCard;
