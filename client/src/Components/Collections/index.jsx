import React, { Component } from 'react';
import {
    ListGroup as Group
} from 'react-bootstrap';

class Collections extends Component {

    constructor(props) {
        super(props)
        this.state = {
            collections: [{
                id: 1,
                name: 'MoveIn4Person-Person'
            }, {
                id: 2,
                name: 'MoveIn4Course-Course'
            }]
        }
    }

    render() {

        const { collections } = this.state
        const { Item } = Group

        return (
            <Group as="ul">
                {collections.map(({id, name}) => {
                    return <Item
                        as="li" 
                        key={id}
                        variant="dark"
                    >
                    {name}
                    </Item>
                })}
            </Group>
        )
    }
}
 export default Collections