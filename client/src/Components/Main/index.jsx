import React, { Component, Fragment } from 'react';
import Collections from 'Components/Collections';
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
                    <Col md={4}>
                        <Collections />
                    </Col>
                    <Col md={8}>
                        
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Main