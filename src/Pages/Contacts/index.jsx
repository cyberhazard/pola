import React from 'react';
import CurrentData from './CurrentData';
import { Page, Header, Top, LeftSide, RightSide } from './styled';

export default () => (
  <Page>
    <Header> Контакты </Header>
    <Top>
      <LeftSide>
        <CurrentData />
      </LeftSide>
      <RightSide> RightSide </RightSide>
    </Top>
  </Page>
);
