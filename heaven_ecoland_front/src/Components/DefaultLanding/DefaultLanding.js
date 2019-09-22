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
    this.state = {
      data: [
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sLorem ipsum dolor sit amet conseLorem ipsum dolor sit amet conseLorem ipsum dolor sit amet conseLorem ipsum dolor sit amet conseLorem ipsum dolor sit amet conseit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "12",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "15",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor  sit amet consectetur adipisicing elit. CLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiaeommodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        }
      ]
    };
  }
  render() {
    const { data } = this.state;
    const { editMode } = this.props;
    return (
      <div className="DefaultLanding-container">
        <Hero />

        {/* -----------------GALLERY SECTION---------------- */}
        <div className="galleryCard-container">
          <div className="gallery-title">
            <h2>Gallery</h2>
          </div>
          <div className="images-container">
            {data.map((data, i) => {
              while (i < 9) {
                return <GalleryCard srcImage={data.img} />;
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
            {data.map((event, i) => {
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
    );
  }
}

export default DefaultLanding;
