import React from 'react';
import styled from 'styled-components';
import Select from './Components/Select';

const Wrapper = styled.div`
  padding: 20rem;
`;

export default () => (
  <Wrapper>
    <Select
      label="Выбирите язык"
      width="16rem"
      height="5rem"
      values={['test1', 'test2', 'test3']}
    />
  </Wrapper>
);
