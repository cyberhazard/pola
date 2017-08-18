import React from 'react';
import styled from 'styled-components';

import page2x from './../_assets/images/page-down@2x.png';

const Image = styled.img`
  width: 104px;
  height: 104px;
  position: fixed;
  right: 5.2083333333%;
  bottom: 5.4545454545vh;
  cursor: pointer;
  animation: float 4s infinite;
  z-index: 20;
  @keyframes float {
    0% {transform: translateY(0)}
    20% {transform: translateY(4px)}
    40% {transform: translateY(1px)}
    60% {transform: translateY(3px)}
    80% {transform: translateY(2px)}
    100% {transform: translateY(0)}
  }
`;

export default () => (
  <Image src={page2x} />
);
