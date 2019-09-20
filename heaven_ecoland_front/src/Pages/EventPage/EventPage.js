import React, { Component } from "react";

//-------------SCSS---------------
import "./EventPage.scss";
//-------------SCSS---------------

//---------IMPORTED COMPONENTS--------------
import EventCard from "../../Components/EventCard/EventCard.js";
//---------IMPORTED COMPONENTS--------------

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="eventPage-container">
        <EventCard />
      </div>
    );
  }
}

export default EventPage;
