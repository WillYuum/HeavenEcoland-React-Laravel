import React, { Component } from "react";

// ----------SCSS--------------
import "./LandingPage.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import DefaultLanding from "../../Components/DefaultLanding/DefaultLanding.js";
import EventLanding from "../../Components/EventLanding/EventLanding.js";
//---------IMPORTED COMPONENTS--------------

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      renderEventLanding: false
    };
  }

  render() {
    const { renderEventLanding } = this.state;
    const { editMode, ...rest } = this.props;
    return renderEventLanding ? (
      <EventLanding editMode={editMode}  />
    ) : (
      <DefaultLanding editMode={editMode} {...rest}/>
    );
  }
}

export default LandingPage;
