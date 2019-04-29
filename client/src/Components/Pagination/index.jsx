import React, { Component } from 'react'
import Actions from 'Components/Actions';
import {
    Row,
    Col,
    ButtonGroup,
    Button,
    FormControl
} from 'react-bootstrap';

class Pagination extends Component {
  render() {
    return (
      <Row>
          <Col>
            <ButtonGroup>
                <Button>&lt;&lt;</Button>
                <Button>&lt;</Button>
                <FormControl type="text" value="0 " size="sm" />
                <Button>&gt;</Button>
                <Button>&gt;&gt;</Button>
            </ButtonGroup>
          </Col>
          <Actions />
      </Row>
    )
  }
}

export default Pagination