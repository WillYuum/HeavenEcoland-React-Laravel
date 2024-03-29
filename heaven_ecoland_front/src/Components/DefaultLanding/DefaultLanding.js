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
//---------IMPORTED COMPONENTS--------------

class DefaultLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderAddImage = () => {
    return (
      <form>
        <input name="galleryImage" type="file" />
      </form>
    );
  };

  render() {
    const { editMode, updateEvent, deleteEvent, ...rest } = this.props;
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
              {editMode ? this.renderAddImage() : ""}

              {rest.galleryData.map((gallery, i) => {
                while (i < 9) {
                  return <GalleryCard srcImage={gallery.image} />;
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
                      updateEvent={updateEvent}
                      deleteEvent={deleteEvent}
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
                      testimonialId={testimonials.id}
                      image={testimonials.img}
                      date={testimonials.date}
                      authr={testimonials.author}
                      text={testimonials.content}
                      {...rest}
                    />
                  );
                }
              })}
            </div>
          </div>
          {/* -----------------TESTIMONIALS SECTION------------------ */}

          <OurStory editMode={editMode} />

          <div className="heaven-location">
            <div className="location-title">
              <h2>Heaven Location</h2>
            </div>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  title="Heaven-location"
                  width="100%"
                  height="600"
                  className="gmap_canvas"
                  src="https://maps.google.com/maps?q=heaven%20ecoland&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLanding;
