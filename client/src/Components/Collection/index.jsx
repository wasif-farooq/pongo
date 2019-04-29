import React, { Component, Fragment } from 'react'
import Query from 'Components/Query';
import Pagination from 'Components/Pagination';
import Records from 'Components/Records';

class Collection extends Component {
  render() {
    return (
      <Fragment>
          <Query />
          <Pagination />
          <Records />
      </Fragment>
    )
  }
}

export default Collection