import React from 'react';
import { connect } from 'react-redux';
import { Block, Blocks, FloatImage, Page, Title, Wave } from './styled';

import wave from './../../_assets/images/wave1.png';
import aboutB1 from './../../_assets/images/about-b1.png';
import aboutB2 from './../../_assets/images/about-b2.png';
import aboutB3 from './../../_assets/images/about-b3.png';
import aboutB4 from './../../_assets/images/about-b4.png';
import aboutB5 from './../../_assets/images/about-b5.png';
import aboutB6 from './../../_assets/images/about-b6.png';

const About = ({ l }) => (
  <Page>
    <Title><Wave src={wave} />{l === 'RU' ? 'О группе' : 'About group'}</Title>
    <Blocks>
      <Block to="/about/structure">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB1} css="top: -7rem; left: -11rem;" />
        {l === 'RU' ? 'Компании группы' : 'Group Companies'}
      </Block>
      <Block to="/about/profile">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB2} css="top: -4.2rem; left: -6rem;" />
        {l === 'RU' ? 'Профиль группы' : 'Group’s Profile Page'}
      </Block>
      <Block to="/about/history">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB3} css="right: -10rem; bottom: -1rem;" />
        {l === 'RU' ? 'История' : 'History'}
      </Block>
      <Block to="/about/lead">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB4} css="top: -7rem; left: -9rem;" />
        {l === 'RU' ? 'Руководство' : 'Management'}
      </Block>
      <Block to="/about/geography">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB5} css="top: -2.4rem; left: -1.7rem;" />
        {l === 'RU' ? 'География' : 'Geography'}
      </Block>
      <Block to="/about/projects">
        <Wave float src={wave} /><FloatImage className="float-image" src={aboutB6} css="right: -17rem; bottom: -9rem;" />
        {l === 'RU' ? 'Проекты' : 'Projects'}
      </Block>
    </Blocks>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(About);
