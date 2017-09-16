import React from 'react';
import styled from 'styled-components';
import m from './../media';

import page2x from './../_assets/images/page-down@2x.png';

const Image = styled.img`
  width: 10.4rem;
  height: 10.4rem;
  position: fixed;
  right: 3%;
  bottom: 0;
  cursor: pointer;
  animation: float 1s infinite;
  z-index: 20;
  @keyframes float {
    0% {transform: translateY(0)}
    60% {transform: translateY(.3rem)}
    100% {transform: translateY(0)}
  }
  ${m.tablet`
    display: none;
  `}
`;

export default () => (
  <Image src={page2x} />
);
