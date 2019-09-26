import React, { Component } from "react";

// ----------SCSS--------------
import "./LoginCard.scss";
// ----------SCSS--------------

// ----------BOOTSTRAP MODULES--------------
import { Form, Button } from "react-bootstrap";
// ----------BOOTSTRAP MODULES--------------

class LogInCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="SignInCard-container">
        <Form>
          <h2>Sign In</h2>
          <Form.Row>
            <Form.Label>UserName</Form.Label>
            <Form.Control value="heavenecoland" type="text" required />
          
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value="_heaven7" required />
            <Form.Row />
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default LogInCard;
