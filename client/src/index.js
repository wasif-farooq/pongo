import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from 'Application/Store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);