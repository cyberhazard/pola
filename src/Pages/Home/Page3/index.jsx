import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks, Page, Last } from './styled';
import Button from './../../../Components/Button';
import { Header, Wave } from './../styled';
import NewsBlock from './../../../Components/NewsBlock';
import news from './../../../_fake_api/news';

import waveWhite from './../../../_assets/images/wave-white.png';

export default ({ l }) => (
  <Page>
    <Header><Wave src={waveWhite} />{l === 'RU' ? 'Последние новости' : 'Last news'}</Header>
    <Blocks>
      {
        news.slice(0, 5).map(({ id, title, timestamp }) =>
          <NewsBlock l={l} key={id} id={id} title={title} timestamp={timestamp} />)
      }
      <Last>
        <Link to="/news/">
          <Button label={l === 'RU' ? 'Все новости' : 'All news'} />
        </Link>
      </Last>
    </Blocks>
  </Page>
);
