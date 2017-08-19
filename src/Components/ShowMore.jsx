import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon as Ficon } from 'react-fa';

const Icon = styled(Ficon)`
  margin-left: 1.4rem;
  transform: translateY(.1rem);
`;

const More = styled(Link)`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 400;
  border-bottom: .1rem dotted rgb(1, 104, 179);
  padding-bottom: .4rem;
`;

export default ({ children, to }) => (
  <More to={to}>{children}<Icon name="angle-right" /></More>
);
