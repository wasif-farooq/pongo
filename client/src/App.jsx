import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Main from 'Components/Main';
import Connection from 'Components/Connection';

class App extends Component {

  render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/connect" exact component={Connection} />
            </Switch>
        </Router>
    );
  }
}

export default App;
