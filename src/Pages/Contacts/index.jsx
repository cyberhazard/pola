import React from 'react';
import styled from 'styled-components';
import CurrentData from './CurrentData';
import MiniMap from './MiniMap';
import Feedback from './Feedback';
import Footer from './Footer';
import Map from './../Home/Page4';
import Targets from './../Home/Page4/Targets';
import { Page, Header, Top, Bottom, LeftSide, RightSide } from './styled';
import { Contact, Places } from './../Home/Page4/styled';

export const MapBlock = styled(Map)`
  width:100%;
`;

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
      <Contact>
        <Places>
          <Targets />
        </Places>
      </Contact>
      <Footer />
    </Bottom>
  </Page>
);
