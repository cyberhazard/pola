import React from 'react';
import styled from 'styled-components';
import m from './../../media';

const Pagintaion = styled.div`
  width: 20.5rem;
  height: 50rem;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 5rem;
  background-size: cover;
  z-index: 20;
  transition: .5s;
  ${({ bg }) => {
    switch (bg) {
      case '0': return `background-image: url(${require('./../../_assets/images/site_map_1.png')});`;
      case '1': return `background-image: url(${require('./../../_assets/images/site_map_2.png')});`;
      case '2': return `background-image: url(${require('./../../_assets/images/site_map_3.png')});`;
      case '3': return `background-image: url(${require('./../../_assets/images/site_map_4.png')});`;
      default: return '';
    }
  }}
  ${m.ipad`
    display: none;
  `}
`;

const Button = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}rem;
  left: ${({ left }) => left}rem;
  cursor: pointer;
`;

export default ({ bg, onClick }) => (
  <Pagintaion bg={bg}>
    <Button onClick={() => onClick(0)} top="5" left="9" />
    <Button onClick={() => onClick(1)} top="17.2" left="13.5" />
    <Button onClick={() => onClick(2)} top="29" left="9" />
    <Button onClick={() => onClick(3)} top="41.6" left="13.5" />
  </Pagintaion>
);
