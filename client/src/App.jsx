import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
        <Row>
          <Col>Wasif</Col>
          <Col>Farooq</Col>
          <Col>{"Siddiqui"}</Col>
        </Row>
    );
  }
}

export default App;
