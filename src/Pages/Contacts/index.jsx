import React from 'react';
import CurrentData from './CurrentData';
import MiniMap from './MiniMap';
import Feedback from './Feedback';
import Footer from './Footer';
import { Page, Header, Top, Bottom, LeftSide, RightSide } from './styled';

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
    <Bottom>
      <Footer />
    </Bottom>
  </Page>
);
