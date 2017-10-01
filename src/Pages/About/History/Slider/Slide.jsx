import React from 'react';
import styled from 'styled-components';
import m from './../../../../media';

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  ${m.tablet`
    display: block;
  `}
`;

const Image = styled.img`
  width: 40rem;
  ${m.tablet`
    margin-bottom: 2rem;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
  height: 100px;
  ${m.tablet`
    padding-left: 0;
    height: auto;
  `}
`;

const Title = styled.h3`
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  flex-grow: 1;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.4rem;
`;


export default ({ img, title, text }) => (
  <Slide>
    <Image src={img} />
    <Content>
      <Title>{title}</Title>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Content>
  </Slide>
);
