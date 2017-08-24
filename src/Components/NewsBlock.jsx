import React from 'react';
import styled from 'styled-components';
import More from './../Components/ShowMore';

const Block = styled.div`
  background-color: #fff;
  padding: 3.8rem;
  flex-basis: 46%;
  margin-bottom: 3.8383838384vh;
  box-shadow: 0 1.2rem 1.5rem rgba(0, 0, 0, 0.12);
`;

const Text = styled.p`
  color: rgb(0, 0, 0);
  font-size: 1.8rem;
  line-height: 3rem;
  font-family: Roboto;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const TimeStamp = styled.div`
  display: inline-block;
  color: rgb(148, 148, 148);
  font-family: Roboto;
  font-size: 1.3rem;
  font-weight: 400;
  position: relative;
  transform: translateX(3.6rem);
  &:before {
    content: '';
    position: absolute;
    top: 25%;
    right: calc(100% + .6rem);
    width: 3rem;
    height: .1rem;
    background-color: rgb(148, 148, 148);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ({ title, timestamp, id }) => (
  <Block>
    <Text>
      {title}
    </Text>
    <Footer>
      <TimeStamp>{timestamp}</TimeStamp>
      <More to={`/news/${id}`}>Подробнее</More>
    </Footer>
  </Block>
);
