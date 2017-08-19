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
`;

const FloatImage = styled.img`
  position: absolute;
  ${p => p.css && p.css}
`;


export default () => (
  <Page>
    <Title><Wave src={wave} />О группе</Title>
    <Blocks>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB1} css="top: -1rem; left: -4rem" />
        Структура группы
      </Block>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB2} css="top: -4.2rem; left: -6rem" />
        Профиль группы
      </Block>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB3} />
        История
      </Block>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB4} />
        Руководство
      </Block>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB5} />
        География
      </Block>
      <Block to="/test">
        <Wave float src={wave} /><FloatImage src={aboutB6} />
        Проекты
      </Block>
    </Blocks>
  </Page>
);
