import React, { Component } from "react";

// ----------SCSS--------------
import "./DefaultLanding.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import Hero from "../Hero/Hero.js";
import GalleryCard from "../GalleryCard/GalleryCard.js";
import EventCard from "../EventCard/EventCard.js";
import TestimonialCard from "../TestimonialCard/TestimonialCard.js";
import OurStory from "../Our Story/OurStory.js";
import ReacUs from "../Reach Us/ReachUs.js";
//---------IMPORTED COMPONENTS--------------

class DefaultLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { editMode, ...rest } = this.props;
    return (
      <div className="DefaultLanding">
        {/* -----------------HERO SECTION---------------- */}

        <div className="hero-Section">
          <Hero />
        </div>

        {/* -----------------HERO SECTION---------------- */}

        <div className="DefaultLanding-container">
          {/* -----------------GALLERY SECTION---------------- */}
          <div className="galleryCard-container">
            <div className="gallery-title">
              <h2>Gallery</h2>
            </div>
            <div className="images-container">
              {rest.galleryData.map((gallery, i) => {
                while (i < 9) {
                  return <GalleryCard srcImage={gallery.img} />;
                }
              })}
            </div>
          </div>
          {/* -----------------GALLERY SECTION---------------- */}

          {/* -----------------EVENT SECTION------------------ */}
          <div className="event-Section">
            <div className="event-title">
              <h2>Events</h2>
            </div>
            <div className="event-container">
              {rest.eventsData.map((event, i) => {
                while (i < 6) {
                  return (
                    <EventCard
                      price={event.price}
                      ImageSrc={event.img}
                      date={event.date}
                      eventTitle={event.eventTitle}
                      discription={event.discription}
                    />
                  );
                }
              })}
            </div>
          </div>
          {/* -----------------EVENT SECTION------------------ */}
          <div>
            <TestimonialCard />
          </div>

          <OurStory editMode={editMode} />
          <ReacUs />
        </div>
      </div>
    );
  }
}

export default DefaultLanding;
