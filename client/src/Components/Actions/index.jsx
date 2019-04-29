import React, { Component } from 'react'
import {
    Col,
    ButtonGroup,
    Button,
} from 'react-bootstrap';

class Actions extends Component {
  render() {
    return (  
        <Col>
        <ButtonGroup>
            <Button>Insert</Button>
            <Button>Update</Button>
            <Button>Delete</Button>
        </ButtonGroup>
        </Col>
    )
  }
}

export default Actions