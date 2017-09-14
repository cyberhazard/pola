import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import RightSide from './RightSide';

const App = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default () => (
  <App>
    <Sidebar />
    <RightSide />
  </App>
);
