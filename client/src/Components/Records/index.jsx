import React, { Component } from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';
import DocumentTree from 'Components/DocumentTree';

class Records extends Component {

    constructor(props) {
        super(props)

        this.state = {
            documents: [{
                _id: ObjectId("5099803df3f4948bd2f98391"),
                name: { first: "Alan", last: "Turing" },
                birth: new Date('Jun 23, 1912'),
                death: new Date('Jun 07, 1954'),
                contribs: [ "Turing machine", "Turing test", "Turingery" ],
                views : NumberLong(1250000)
            }]
        }

    }

  render() {
    return (
      <Row>
          <Col>
            <DocumentTree documents={this.state.documents} />
          </Col>
      </Row>
    )
  }
}

export default Records