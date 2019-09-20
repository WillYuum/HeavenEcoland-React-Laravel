import React from "react";

//-------------CSS---------------
import "./App.css";
//-------------CSS---------------

//---------IMPORTED COMPONENTS--------------
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/footer/Footer.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
//---------IMPORTED COMPONENTS--------------

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
