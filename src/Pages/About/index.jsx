import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bg from './../../_assets/images/home-page4-bg-rect.png';
import wave from './../../_assets/images/wave1.png';

import aboutB1 from './../../_assets/images/about-b1.png';
import aboutB2 from './../../_assets/images/about-b2.png';
import aboutB3 from './../../_assets/images/about-b3.png';
import aboutB4 from './../../_assets/images/about-b4.png';
import aboutB5 from './../../_assets/images/about-b5.png';
import aboutB6 from './../../_assets/images/about-b6.png';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 93.3333333333vh;
  background: white url('${bg}') top left no-repeat;
  background-size: 45.2rem;
`;

const Title = styled.h2`
  color: black;
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

const Wave = styled.img`
  margin-right: 2.8rem;
  ${prop => prop.float && `
    position: absolute;
    top: 4.2rem;
    right: 0;
    margin-right: 0;
  `}
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 4.9689440994%;
  padding-right: 12.4223602484%;
`;

const Block = styled(Link)`
  position: relative;
  background-color: #fff;
  height: 25.2rem;
  flex-basis: 31.2977099237%;
  padding-top: 19rem;
  padding-left: 4.2rem;
  margin-bottom: 4rem;
  border: 0.2rem solid rgb(229, 229, 229);
  color: black;
  font-family: Lora;
  font-size: 2.8rem;
  font-weight: 700;
  transition: .4s;
  will-change: box-shadow;
  &:hover {
    box-shadow: .1rem .1rem 2.6rem black;
    transform: translate(-.1rem,-.1rem)
  }
`;

const FloatImage = styled.img`
  position: absolute;
  ${p => p.css && p.css}
`;


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

