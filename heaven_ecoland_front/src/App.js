import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

//-------------CSS---------------
import "./App.css";
//-------------CSS---------------

//---------IMPORTED COMPONENTS--------------
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/footer/Footer.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import EventPage from "./Pages/EventPage/EventPage.js";
import BlogPage from "./Pages/BlogPage/BlogPage.js";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage.js";
//---------IMPORTED COMPONENTS--------------

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
        }
      ],
      testimonialsData: [
        {
          img:
            "https://lh3.googleusercontent.com/bCDiJJkItiG4-s1ijDXxtsKy60hpf4Jo1fiQExKujtORmIrWgczZ67gLmFifzUuDxaRbaVV1oYgGD4HE4g=w768-h768-n-o-v1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio, molestiae minima minus impedit in tempore suscipit quia ullam quisquam recusandae. Quae eum expedita quam dolores consectetur fugiat, voluptatibus a",
            date: "12/9/2020",
            authr:"jafar saleh",
          }

      ],
      editMode: false
    };
  }

  toggleEditMode = () => {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  };

  render() {
    const { editMode } = this.state;
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
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
