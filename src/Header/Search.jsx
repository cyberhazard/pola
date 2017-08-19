import React from 'react';
import styled from 'styled-components';
import { Icon as FontIcon } from 'react-fa';

const Search = styled.input`
  width: 34.6rem;
  height: 4.2rem;
  border-radius: 2.1rem;
  background-color: #000d16;
  opacity: 0.5;
  border: none;
  color: white;
  padding: 0 2.4rem 0 4.8rem;
  &::placeholder {
    opacity: 0.3;
    color: #ffffff;
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 5.5900621118%;
  margin-left: 1.8633540373%;
  position: relative;
`;

const Icon = styled(FontIcon)`
  color: white;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
`;

export default () => (
  <Wrapper>
    <Search type="text" placeholder="Введите запрос для поиска" />
    <Icon name="search" />
  </Wrapper>
);
