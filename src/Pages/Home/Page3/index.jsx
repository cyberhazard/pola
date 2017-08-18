import React from 'react';
import More from './../../../Components/ShowMore';
import { Block, Blocks, Footer, Page, Text, TimeStamp, Wave, Last } from './styled';
import Button from './../../../Components/Button';
import { Header } from './../styled';

import waveWhite from './../../../_assets/images/wave-white.png';

const NewsBlock = () => (
  <Block>
    <Text>
      Рабочая встреча гендиректора «Pola Group» с председателем правительства РФ Д. Медведевым
    </Text>
    <Footer>
      <TimeStamp>10 июля 2017 10:00</TimeStamp>
      <More to="/">Подробнее</More>
    </Footer>
  </Block>
);


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
