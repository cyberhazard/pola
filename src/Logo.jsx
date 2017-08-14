import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;
  padding: 38px 100px;
  background-color:  #141b22;
  box-shadow: 1px 1px 6px black;
  transform-origin: top left;
  transform: scale(1.025);
  margin-bottom: 60px;
  flex-shrink: 0;
`;

const Image = styled.img`
  height: 100%;
`;

export default () => (
  <Logo to="/">
    <Image src={require('./_assets/images/pola-logo.png')} />
  </Logo>
);
