import React, { Component, Fragment } from 'react';
import Collections from 'Components/Collections';
import Collection from 'Components/Collection';
import Nav from 'Components/Nav';
import {
    Row,
    Col
} from 'react-bootstrap';

class Main extends Component
{
    render() {
        return (
            <Fragment>
                <Row>
                    <Col>
                        <Nav />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Collections />
                    </Col>
                    <Col md={9}>
                        <Collection />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Main