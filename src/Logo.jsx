import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20.20vh;
  background-color:  #141b22;
  margin-bottom: 6vh;
  flex-shrink: 0;
`;

const Image = styled.img`
  max-width: 126px;
  max-height: 80%;
`;

export default () => (
  <Logo to="/">
    <Image src={require('./_assets/images/pola-logo.png')} />
  </Logo>
);
