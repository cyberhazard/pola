import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';

const Breadcrumbs = styled.div`

`;

const Root = styled(Link)`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Angle = styled(Icon)`
  font-size: 1.5rem;
  margin: 0 1.1rem;
`;

const Current = styled.span`
  color: rgb(158, 158, 158);
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 400;
`;

export default ({ to, label, to2, label2, current }) => (
  <Breadcrumbs>
    <Root to={to}>{label}</Root>
    {
      to2 && label2 &&
      <Root to={to2}> <Angle name="angle-right" /> {label2}</Root>
    }
    <Angle name="angle-right" /><Current>{current}</Current>
  </Breadcrumbs>
);
