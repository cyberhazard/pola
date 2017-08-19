import React from 'react';
import { Block, Blocks, FloatImage, Page, Title, Wave } from './styled';

import wave from './../../_assets/images/wave1.png';
import aboutB1 from './../../_assets/images/about-b1.png';
import aboutB2 from './../../_assets/images/about-b2.png';
import aboutB3 from './../../_assets/images/about-b3.png';
import aboutB4 from './../../_assets/images/about-b4.png';
import aboutB5 from './../../_assets/images/about-b5.png';
import aboutB6 from './../../_assets/images/about-b6.png';

export default () => (
  <Page>
    <Title><Wave src={wave} />О группе</Title>
    <Blocks>
      <Block to="/about/structure">
        <Wave float src={wave} /><FloatImage src={aboutB1} css="top: -1rem; left: -4rem;" />
        Структура группы
      </Block>
      <Block to="/about/profile">
        <Wave float src={wave} /><FloatImage src={aboutB2} css="top: -4.2rem; left: -6rem" />
        Профиль группы
      </Block>
      <Block to="/about/history">
        <Wave float src={wave} /><FloatImage src={aboutB3} css="right: -10rem; bottom: -1rem" />
        История
      </Block>
      <Block to="/about/lead">
        <Wave float src={wave} /><FloatImage src={aboutB4} css="top: -1.3rem; left: -4rem" />
        Руководство
      </Block>
      <Block to="/about/geography">
        <Wave float src={wave} /><FloatImage src={aboutB5} css="top: -2.4rem; left: -1.7rem" />
        География
      </Block>
      <Block to="/about/projects">
        <Wave float src={wave} /><FloatImage src={aboutB6} css="right: -5.6rem; bottom: -4.3rem" />
        Проекты
      </Block>
    </Blocks>
  </Page>
);
