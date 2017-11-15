import React from 'react';
import { connect } from 'react-redux';
import { Content, Header, Page, Text, Img, Block } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';

import map from './../../../_assets/images/geo-map.png';

const Geography = ({ l }) => (
  <Page>
    <Breadscrubs to="/about/" label={l === 'RU' ? 'О группе' : 'About group'} current={l === 'RU' ? 'География' : 'Geography'} />
    <Header>{l === 'RU' ? 'География' : 'Geography'}</Header>
    <Content>
      <Text />
      <Img src={map} />
    </Content>
    <Block to="/about/projects/">
      <Button label={l === 'RU' ? 'Проекты' : 'Projects'} />
    </Block>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Geography);
