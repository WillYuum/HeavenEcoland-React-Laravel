import React, { Component } from "react";

//-------------CSS---------------
import "./App.css";
//-------------CSS---------------

//---------IMPORTED COMPONENTS--------------
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/footer/Footer.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
//---------IMPORTED COMPONENTS--------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: [],
      eventsData: [],
      testimonialsData: [],
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
        <LandingPage
          editMode={editMode}
          galleryData={galleryData}
          eventsData={eventsData}
          testimonialsData={testimonialsData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
