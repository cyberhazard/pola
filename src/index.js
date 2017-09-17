/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import './_assets/css/global.css';
import reducers from './_reducers';

import './_assets/css/fonts.css';
import App from './App';
// eslint-disable-next-line
//import TestComponents from './TestComponents.jsx';

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
