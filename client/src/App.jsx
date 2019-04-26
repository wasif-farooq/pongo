import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GET_COLLECTIONS } from 'Application/Constants';

class App extends Component {

  render() {
    return (
        <Row>
          <Col>Wasif</Col>
          <Col>Farooq</Col>
          <Col>{GET_COLLECTIONS}</Col>
        </Row>
    );
  }
}

export default App;
