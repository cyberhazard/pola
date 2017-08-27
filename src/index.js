/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './_assets/css/global.css';

import './_assets/css/fonts.css';
import App from './App';
// eslint-disable-next-line
//import TestComponents from './TestComponents.jsx';

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root'),
);
