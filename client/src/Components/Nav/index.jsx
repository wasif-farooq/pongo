import React, { Component } from 'react'
import Navbar, {
    Brand
} from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Brand href="/">Pongo</Brand>
        <Form inline>
            <Button variant="outline-primary">Insert</Button>
            <Button variant="outline-primary">Update</Button>
            <Button variant="outline-primary">Delete</Button>
        </Form>
      </Navbar>
    )
  }
}
export default Nav