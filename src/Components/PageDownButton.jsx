import React from 'react';
import styled from 'styled-components';
import m from './../media';

import page2x from './../_assets/images/page-down@2x.png';

const Image = styled.img`
  width: 10.4rem;
  height: 10.4rem;
  ${({ top }) => top && 'transform: rotate(180deg);'}
`;

const Wrapper = styled.div`
  position: fixed;
  right: 3%;
  bottom: 0;
  cursor: pointer;
  z-index: 20;
  animation: float 1s infinite;
  @keyframes float {
    0% {transform: translateY(0)}
    60% {transform: translateY(.3rem)}
    100% {transform: translateY(0)}
  }
  ${m.tablet`
    display: none;
  `}
`;

export default ({ top }) => (
  <Wrapper>
    <Image top={top} src={page2x} />
  </Wrapper>
);
