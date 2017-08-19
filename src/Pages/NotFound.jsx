import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  display: flex;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 5rem;
`;

export default () => (
  <NotFound>
    Hey man, the page not found!
  </NotFound>
);
