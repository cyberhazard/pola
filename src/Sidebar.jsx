import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Socials from './Socials';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 31rem;
  flex: 0 0 31rem;
  height: 100%;
  font-family: 'Roboto';
  font-weight: 400;
  background: #000d16 url('${require('./_assets/images/decor_bottom.png')}') left bottom no-repeat;
`;

export default ({ language }) => (
  <Sidebar>
    <Logo />
    <Menu language={language} />
    <Socials />
  </Sidebar>
);
