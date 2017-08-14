import React from 'react';
import styled from 'styled-components';
import Select from './Components/Select';

const Wrapper = styled.div`
  padding: 200px;
`;

export default () => (
  <Wrapper>
    <Select
      label="Выбирите язык"
      width="160px"
      height="50px"
      values={['test1', 'test2', 'test3']}
    />
  </Wrapper>
);
