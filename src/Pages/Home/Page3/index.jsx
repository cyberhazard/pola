import React from 'react';
import { Blocks, Page, Last } from './styled';
import Button from './../../../Components/Button';
import { Header, Wave } from './../styled';
import NewsBlock from './../../../Components/NewsBlock';

import waveWhite from './../../../_assets/images/wave-white.png';

export default () => (
  <Page>
    <Header><Wave src={waveWhite} /> Последние новости</Header>
    <Blocks>
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />
      <Last>
        <Button label="Все новости" />
      </Last>
    </Blocks>
  </Page>
);
