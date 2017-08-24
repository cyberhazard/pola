import React from 'react';
import { Blocks, Page, Last } from './styled';
import Button from './../../../Components/Button';
import { Header, Wave } from './../styled';
import NewsBlock from './../../../Components/NewsBlock';
import news from './../../../_fake_api/news';

import waveWhite from './../../../_assets/images/wave-white.png';

export default () => (
  <Page>
    <Header><Wave src={waveWhite} /> Последние новости</Header>
    <Blocks>
      {
        news.slice(0, 5).map(({ id, title, timestamp }) =>
          <NewsBlock key={id} id={id} title={title} timestamp={timestamp} />)
      }
      <Last>
        <Button label="Все новости" />
      </Last>
    </Blocks>
  </Page>
);
