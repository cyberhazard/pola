import React from 'react';
import { Content, Header, Page, Text, Img, Block } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';

import map from './../../../_assets/images/geo-map.png';

export default () => (
  <Page>
    <Breadscrubs to="/about" label="О Группе" current="География" />
    <Header>География</Header>
    <Content>
      <Text />
      <Img src={map} />
    </Content>
    <Block to="/about/projects">
      <Button label="Проекты" />
    </Block>
  </Page>
);
