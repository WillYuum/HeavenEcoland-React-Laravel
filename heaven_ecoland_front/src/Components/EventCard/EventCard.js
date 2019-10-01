import React, { useState } from "react";
import { Link } from "react-router-dom";

// ----------SCSS--------------
import "./Event.scss";
// ----------SCSS--------------

const EventCard = ({
  eventId,
  price,
  image,
  date,
  title,
  description,
  editMode,
  updateEvent,
  ...eventFuncs
}) => {
  const [eventsData, setEventData] = useState({});
  // this.onFormSubmit = this.onFormSubmit.bind(this);
  // this.onChange = this.onChange.bind(this);
  // this.fileUpload = this.fileUpload.bind(this);
  const [imageUploaded, setImage] = useState([]);

  const handleChange=event =>{

    const target= event.target;
  const value= target.value;
  const name= target.name;
setEventData({
[name]:value
});
  }
  const onFormSubmit = e => {
    // on submit form;
    e.preventDefault();
    fileUpload(imageUploaded);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const title = e.target.title.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    console.log("HI",title, date, description, price);

    updateEvent(eventId, { title, date, price, description });
  };
  const onChange = e => {
    // onchange
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    createImage(files[0]);
  };

  const createImage = file => {
    let reader = new FileReader();
    reader.onload = e => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const fileUpload = data => {
    // fetch upload image API
    fetch("http://localhost:8000/api/fileupload", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    // const formData = { file: imageUploaded };
  };

  const ViewEventCard = () => {
 
    return (
      <div className="EventCard-container">
        <div className="priceTag">${price}</div>
        <img
          className="event-img"
          src={image}
          alt="sommething went wrong"
          width="300px"
          height="300px"
        />
        <div className="description-warper">
          <time className="time">{date}</time>
          <h2 className="event-title">{title}</h2>
          <div className="description">{description} </div>
          <div class="more">
            <Link class="more" to={`/event/${eventId}`}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const EditEventCard = () => {
    return (
      <div className="EventCard-container">
        <button onClick={() => eventFuncs.deleteEvent(eventId)}>X</button>
        
        
        <form
          method="PUT"
          onSubmit={ handleSubmit}
          enctype="multipart/form-data"
        >
          {/* form of method 'post and action =url ('/uploadfile')' and enctype="multipart/form-data"  */}
          <input
            type="file"
            name="select_file"
            onChange={onChange}
            className="imageUpload"
          />
          <div className="EDIT-priceTag">
          <input name="price" type="text" value={price}/>
          </div>
          {/* browse buttor
          {/* browse button of type 'file' */}
          {/* UPLOAD button  of type 'submit' and name 'upload'  */}

        <img className="event-img" src={image} width="300px" height="300px" />
        <div className="description-warper">
          <input className="EDIT-event-date"
           type="date"
            value={date} 
             onChange={handleChange}
             name="date"
              />
          <input
            type="text"
            className="EDIT-event-title"
            defaultValue={title}
            onChange={handleChange}
            name="title"
          />
          <input
            className="EDIT-event-description"
            type="text"
            defaultValue={description}
            onChange={handleChange}
            name="description"
          />
          <input
            type="submit"
            name="upload"
            className="submit"
            value="Upload"
          
          />
        </div>
        </form>
        
      
        </div>
    );
  };
  return editMode ? EditEventCard() : ViewEventCard();
};

export default EventCard;
