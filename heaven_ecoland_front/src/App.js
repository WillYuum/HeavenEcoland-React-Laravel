import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

//-------------CSS---------------
import "./App.css";
//-------------CSS---------------

//---------IMPORTED PAGES--------------
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/footer/Footer.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import EventPage from "./Pages/EventPage/EventPage.js";
import BlogPage from "./Pages/BlogPage/BlogPage.js";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage.js";
import EventDetails from "./Components/EventDetails/EventDetail.js";
//---------IMPORTED PAGES--------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: [
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
      ],
      eventsData: [
        {
          name: "12982",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          name: "111",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          name: "12122",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          name: "832",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          name: "800",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        },
        {
          name: "120",
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
          price: "free",
          date: "12/2/2019",
          eventTitle: "Mike Andrews",
          discription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus aspernatur."
        }
      ],
      testimonialsData: [],
      eventId: "",
      editMode: false
    };
  }

  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  };

  /**
   * @function getEventId
   * @param {int} id - this function retrieves the event if from <EventCard />
   */
  getEventId = async id => {
    const getId = await this.setState({ eventId: id });
    return getId;
  };

  render() {
    const { editMode, eventId } = this.state;
    // -----------DATA STATES---------------
    const { galleryData, eventsData, testimonialsData } = this.state;
    // -----------DATA STATES---------------

    return (
      <div className="App">
        <Nav />
        <button className="EditMode-btn" onClick={this.toggleEditMode}>
          Edit Mode
        </button>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <LandingPage
                editMode={editMode}
                getEventId={this.getEventId}
                galleryData={galleryData}
                eventsData={eventsData}
                testimonialsData={testimonialsData}
              />
            )}
          />
          <Route
            path="/gallerypage"
            render={() => (
              <GalleryPage editMode={editMode} galleryData={galleryData} />
            )}
          />
          <Route path="/eventpage" render={() => <EventPage />} />
          <Route path="/blogpage" render={() => <BlogPage />} />
          <Route path="/contactus" render={() => <ContactUsPage />} />
          <Route
            path={`/event/${eventId}`}
            render={() => <EventDetails eventId={eventId} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
