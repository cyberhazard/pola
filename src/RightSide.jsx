import React from 'react';
import styled from 'styled-components';

const RightSide = styled.div`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: colum;
  border: 2px solid green
`;

export default () => (
  <RightSide />
);
