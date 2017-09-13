import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import RightSideBlocked from './RightSide';

const App = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const RightSide = withRouter(RightSideBlocked);

export default () => (
  <App>
    <Sidebar />
    <RightSide />
  </App>
);
