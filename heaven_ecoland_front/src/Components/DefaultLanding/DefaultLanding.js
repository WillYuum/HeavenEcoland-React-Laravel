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
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        },
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1"
        }
      ]
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div className="DefaultLanding-container">
        <Hero />

        {/* -----------------GALLERY SECTION---------------- */}
        <div className="galleryCard-container">
          <h2 classname="gallery-title">Gallery</h2>
          <div className="images-container">
            {data.map(data => {
              return <GalleryCard srcImage={data.img} />;
            })}
          </div>
        </div>
        {/* -----------------GALLERY SECTION---------------- */}

        <div>
          <EventCard />
        </div>
        <div>
          <TestimonialCard />
        </div>

        <OurStory />
        <ReacUs />
      </div>
    );
  }
}

export default DefaultLanding;
