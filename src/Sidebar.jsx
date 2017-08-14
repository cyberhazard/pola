import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Sidebar = styled.div`
  width: 310px;
  flex: 0 0 310px;
  height: 100%;
  border: 2px solid black;
  font-family: 'Roboto';
  font-weight: 400;
`;

export default () => (
  <Sidebar>
    <Logo />
    {/* <Logo />
    <Menu /> */}
    Hello World!
  </Sidebar>
);
