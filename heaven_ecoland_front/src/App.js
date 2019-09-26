import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

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
import LoginPage from "./Pages/LoginPage/LoginPage.js";
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
      eventsData: [],
      testimonialsData: [],
      isLoggedIn: false,
      editMode: false
    };
  }

  getTestimonilas = async () => {
    try {
      const req = await fetch("http://127.0.0.1:8000/api/testimonial/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      const testimonials = await req.json();
      this.setState({ testimonialsData: testimonials });
    } catch (err) {
      console.log(err);
      throw new Error("fetching testimonials failed");
    }
  };

  /**
   * @function logIn -function that takes the username and password to get the login and have the edit mode turn to true
   * @param {string}
   * @param {string}
   */
  logIn = () => {
    const req = fetch("", {
      method: "",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    try {
    } catch (err) {
      console.log(err);
      throw new Error("logging in failed");
    }
  };

  async componentDidMount() {
    this.getEvents();
    this.getTestimonilas();
  }

  /**
   * @function getEvents - fetch the data for events
   */
  getEvents = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/event/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const events = await res.json();
      this.setState({ eventsData: events });
    } catch (err) {
      console.log(err);
      throw new Error("fetching  EVENTS failed");
    }
  };

  /**
   * @function toggleEditMode -changes the editMode in state to True or False
   */
  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  };

  render() {
    const { editMode, isLoggedIn } = this.state;
    // -----------DATA STATES---------------
    const { galleryData, eventsData, testimonialsData } = this.state;
    // -----------DATA STATES---------------

    return (
      <div className="App">
        <Nav />
        {isLoggedIn && (
          <button className="EditMode-btn" onClick={this.toggleEditMode}>
            Edit Mode
          </button>
        )}
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
          <Route
            path="/eventpage"
            render={() => <EventPage eventsData={eventsData} />}
          />
          <Route path="/blogpage" render={() => <BlogPage />} />
          <Route path="/contactus" render={() => <ContactUsPage />} />
          <Route
            path={`/event/:id`}
            render={props => <EventDetails {...props} />}
          />
          <Route path="/login-to-heaven" render={() => <LoginPage />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
