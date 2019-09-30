import React, { Component } from "react";

//-------------SCSS---------------
import "./EventPage.scss";
//-------------SCSS---------------
import "../../Components/EventCard/Event.scss";
//---------IMPORTED COMPONENTS--------------
import EventCard from "../../Components/EventCard/EventCard.js";
//---------IMPORTED COMPONENTS--------------

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { editMode, ...eventFuncs } = this.props;
    console.log("WILLY", editMode)
    return (
      <div className="eventPage-container">
        {this.props.eventsData.map(event => {
          return (
            <EventCard
              eventId={event.id}
              price={event.price}
              ImageSrc={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
              editMode={editMode}
              {...eventFuncs}
            />
          );
        })}
      </div>
    );
  }
}

export default EventPage;
