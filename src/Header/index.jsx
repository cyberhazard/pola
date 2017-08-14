import React from 'react';
import styled from 'styled-components';

import Select from './../Components/Select';

const Header = styled.div`
  height: 66px;
  width: 100%;
  border: 1px solid black;
  flex-shrink: 0;
  background-color: rgba(0,0,0,0.8);
  padding-left: 80px;
`;

export default () => (
  <Header>
    <Select
      height="100%"
      width="126px"
      label="Язык"
      values={['RU', 'EN']}
      onChange={console.log}
    />
  </Header>
);
