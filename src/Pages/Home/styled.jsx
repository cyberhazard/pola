import styled from 'styled-components';
import m from './../../media';

export const Page = styled.div`
  position: relative;
  height: 93.3333333333vh;
`;

export const Header = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  transform: translateX(-17rem);
  margin-bottom: 4.6rem;
  ${m.tablet`
    white-space: nowrap;
    transform: translateX(-15rem);
  `}
`;

export const Wave = styled.img`
height: 1.1rem;
transform: translateY(-50%);
margin-right: 2.4rem;
`;
