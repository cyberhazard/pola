import React from 'react';
import styled from 'styled-components';
import m from './../media';

import page2x from './../_assets/images/page-down@2x.png';

const Image = styled.img`
  width: 10.4rem;
  height: 10.4rem;
  position: fixed;
  right: 5.2083333333%;
  bottom: 5.4545454545vh;
  cursor: pointer;
  animation: float 4s infinite;
  z-index: 20;
  @keyframes float {
    0% {transform: translateY(0)}
    20% {transform: translateY(.4rem)}
    40% {transform: translateY(.1rem)}
    60% {transform: translateY(.3rem)}
    80% {transform: translateY(.2rem)}
    100% {transform: translateY(0)}
  }
  ${m.tablet`
    display: none;
  `}
`;

export default () => (
  <Image src={page2x} />
);
