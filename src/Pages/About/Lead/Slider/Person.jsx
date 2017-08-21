import React from 'react';
import styled from 'styled-components';
import line from './../../../../_assets/images/mini-line.png';

const Person = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 23.6rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 4rem;
  &:last-child {
    margin-right: 0;
  }
`;

const Image = styled.img`
  height: 22rem;
  width: 100%;
`;

const Title = styled.h4`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.8rem;
  margin-top: 3rem;
  margin-bottom: 2.1rem;
  height: 4.5rem;
`;

const Position = styled.div`
  opacity: 0.6;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2.2rem;
`;

const Description = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const Line = styled.img`
  margin-bottom: 2.2rem;
`;

export default ({ img, title, position, description }) => (
  <Person>
    <Image src={img} />
    <Title>{title}</Title>
    <Position>{position}</Position>
    <Line src={line} alt="" />
    <Description>{description}</Description>
  </Person>
);
