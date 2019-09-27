import React, { Component } from "react";

// ----------SCSS--------------
import "./LoginPage.scss";
// ----------SCSS--------------

//---------IMPORTED COMPONENTS--------------
import LoginCard from "../../Components/LoginCard/LoginCard.js";
//---------IMPORTED COMPONENTS--------------

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { loginFunc } = this.props;
    return (
      <div className="loginPage-container">
        <LoginCard loginFunc={loginFunc} />
      </div>
    );
  }
}

export default loginPage;
