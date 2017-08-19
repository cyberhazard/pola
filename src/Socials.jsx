import React from 'react';
import styled from 'styled-components';

const Socials = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.a`
  font-family: 'Social';
  font-size: 5.2rem;
  color: #4D5057;
  transition: .3s;
  margin-right: 1.8rem;
  &:last-child{
    margin-right: 0;
  }
  &:hover {
    color: #0397d6;
  }
`;


export default () => (
  <Socials>
    <Icon href="http://vk.com">U</Icon>
    <Icon href="http://twitter.com">T</Icon>
    <Icon href="http://facebook.com">F</Icon>
    <Icon href="http://linkedin.com">L</Icon>
  </Socials>
);
