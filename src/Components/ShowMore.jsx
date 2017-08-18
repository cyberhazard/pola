import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon as Ficon } from 'react-fa';

const Icon = styled(Ficon)`
  margin-left: 14px;
  transform: translateY(1px);
`;

const More = styled(Link)`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  border-bottom: 1px dotted rgb(1, 104, 179);
  padding-bottom: 4px;
`;

export default ({ children, to }) => (
  <More to={to}>{children}<Icon name="angle-right" /></More>
);
