import React, { Component, Fragment } from 'react'
import {
    Row,
    Col
} from 'react-bootstrap';
import {
    Group,
    Label,
    Control
} from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

class Query extends Component {
  render() {
    return (
      <Fragment>
          <Group as={Row}>
            <Col md={2}>
                <Label>Filters</Label>
            </Col>
            <Col md={8}>
                <Control name="filters" value="{}" />
            </Col>
            <Col md={2}>
                <Button variant="secondary">Referesh</Button>
            </Col>
          </Group>

          <Group as={Row}>
            <Col md={2}>
                <Label>Projection</Label>
            </Col>
            <Col md={4}>
                <Control name="projection" value="{}" />
            </Col>
            <Col md={2}>
                <Label>Sort</Label>
            </Col>
            <Col md={4}>
                <Control name="sort" value="{}" />
            </Col>
          </Group>

          <Group as={Row}>
            <Col md={2}>
                <Label>Skip</Label>
            </Col>
            <Col md={4}>
                <Control name="skip" value="" />
            </Col>
            <Col md={2}>
                <Label>Limit</Label>
            </Col>
            <Col md={4}>
                <Control name="limit" value="" />
            </Col>
          </Group>
      </Fragment>
    )
  }
}

export default Query