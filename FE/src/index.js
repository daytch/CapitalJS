import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import store from './redux/store';
import {BASE_URL} from './constants';

// css
import './style/style.scss';

// history
import history from './utils/history';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter basename={BASE_URL}>
        <Router history={history}>
          <App />
        </Router>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
