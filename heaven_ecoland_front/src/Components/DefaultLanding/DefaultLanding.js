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
                      editMode={editMode}
                      eventId={event.id}
                      price={event.price}
                      image={event.image}
                      date={event.date}
                      title={event.title}
                      description={event.description}
                    />
                  );
                }
              })}
            </div>
          </div>
          {/* -----------------EVENT SECTION------------------ */}

          {/* -----------------TESTIMONIALS SECTION------------------ */}
          <div className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
              {rest.testimonialsData.map((testimonials, i) => {
                while (i < 3) {
                  return (
                    <TestimonialCard
                      image={testimonials.img}
                      date={testimonials.date}
                      authr={testimonials.author}
                      text={testimonials.content}
                    />
                  );
                }
              })}
            </div>
            <div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="600" height="500" className="gmap_canvas" src="https://maps.google.com/maps?q=heaven%20ecoland&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                </div>
            </div>
          </div>
          {/* -----------------TESTIMONIALS SECTION------------------ */}

          <OurStory editMode={editMode} />
          <ReacUs />
        </div>
      </div>
    );
  }
}

export default DefaultLanding;
