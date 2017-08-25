import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Content from './Content';

const RightSide = styled.div`
  width: calc(100% - 31rem);
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url('${require('./_assets/images/big-ship.png')}') center center no-repeat;
  background-size: cover;
`;

export default ({ language, changeLang, location, changeLocation }) => (
  <RightSide>
    <Header
      language={language}
      location={location}
      changeLang={changeLang}
      changeLocation={changeLocation}
    />
    <Content />
  </RightSide>
);
