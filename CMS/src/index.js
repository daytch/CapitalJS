import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './redux/store';
import history from './utils/history';
import {BASE_URL} from './constants';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,faTimesCircle);

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={BASE_URL}>
      <Router history={history}>
        <App/>
      </Router>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
