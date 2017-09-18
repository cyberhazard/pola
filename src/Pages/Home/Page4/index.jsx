import React from 'react';
import { Page, Contact, Places, Contacts } from './styled';
import { Header, Wave } from './../styled';
import Targets from './Targets';

import waveWhite from './../../../_assets/images/wave-white.png';

export default () => (
  <Page>
    <Header> <Wave src={waveWhite} /> Контакты </Header>
    <Contacts>
      <Contact />
      <Places>
        <Targets />
      </Places>
    </Contacts>
  </Page>
);
