import React from 'react';
import CurrentData from './CurrentData';
import MiniMap from './MiniMap';
import Feedback from './Feedback';
import { Page, Header, Top, LeftSide, RightSide } from './styled';

export default () => (
  <Page>
    <Header> Контакты </Header>
    <Top>
      <LeftSide>
        <CurrentData />
        <MiniMap />
      </LeftSide>
      <RightSide>
        <Feedback />
      </RightSide>
    </Top>
  </Page>
);
