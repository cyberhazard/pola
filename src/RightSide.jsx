import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Content from './Content';

const RightSide = styled.div`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url('${require('./_assets/images/big-ship.png')}') center center no-repeat;
  baackground-size: cover;
`;

export default () => (
  <RightSide>
    <Header />
    <Content />
  </RightSide>
);
