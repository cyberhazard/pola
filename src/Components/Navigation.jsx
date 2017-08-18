import React from 'react';
import styled from 'styled-components';

import left from './../_assets/images/arrow-left.png';
import right from './../_assets/images/arrow-right.png';
import dot from './../_assets/images/dot.png';

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 22px;
  ${p => p.abs && `
    position: absolute;
    bottom: 7.0707070707vh;
    left: 6.2111801242%;
  `}
`;

const Left = styled.img`
  height: 22px;
  cursor: pointer;
`;

const Dot = styled.img`
  height: 8px;
`;

const Right = styled.img`
  height: 22px;
  cursor: pointer;
`;


export default props => (
  <Navigation {...props}>
    <Left src={left} />
    <Dot src={dot} />
    <Right src={right} />
  </Navigation>
);
