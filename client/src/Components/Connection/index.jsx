import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
} from 'react-bootstrap';
import {
    Dialog,
    Header,
    Title,
    Body,
    Footer
} from 'react-bootstrap/Modal';

import {
    Group,
    Label,
    Control
} from 'react-bootstrap/Form';

class Connection extends Component
{
    render() {
        return (
            <Dialog centered>
                <Header>
                    <Title>Connect</Title>
                </Header>
                <Body>

                    <Group as={Row}>
                        <Col sm={3}>
                            <Label>Host</Label>
                        </Col>
                        <Col sm={9}>
                            <Control name="host" />
                        </Col>
                    </Group>

                    <Group as={Row}>
                        <Col sm={3}>
                            <Label>User Name</Label>
                        </Col>
                        <Col sm={9}>
                            <Control name="username" />
                        </Col>
                    </Group>

                    <Group as={Row}>
                        <Col sm={3}>
                            <Label>Password</Label>
                        </Col>
                        <Col sm={9}>
                            <Control name="password" type="password" />
                        </Col>
                    </Group>

                    <Group as={Row}>
                        <Col sm={3}>
                            <Label>Database Name</Label>
                        </Col>
                        <Col sm={9}>
                            <Control name="dbname" />
                        </Col>
                    </Group>

                    <Group as={Row}>
                        <Col sm={3}>
                            <Label>Port</Label>
                        </Col>
                        <Col sm={9}>
                            <Control name="port" />
                        </Col>
                    </Group>
                </Body>

                <Footer>
                    <Button variant="primary">Connect</Button>
                </Footer>
            </Dialog>
        )
    }
}

export default Connection