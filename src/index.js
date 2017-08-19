/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

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

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  html {
    font-size: 10px;
  }
  body {
    overflow: hidden;
  }
`;
