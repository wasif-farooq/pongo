import React, { Component } from 'react'
import Navbar, {
    Brand
} from 'react-bootstrap/Navbar';


class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Brand href="/">Pongo</Brand>
      </Navbar>
    )
  }
}
export default Nav