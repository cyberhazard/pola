import React from 'react';
import styled from 'styled-components';

const Point = styled.div`
  position: absolute;
  bottom: -1rem;
  left: ${p => (p.offset ? `${p.offset}%` : '-1rem')};
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  background-color: rgb(0, 104, 179);
  border-radius: 50%;
  ${p => p.isSelected && `
    &:before {
      content: '';
      position: absolute;
      top: -1.3rem;
      left: -1.3rem;
      height: 4.4rem;
      width: 4.4rem;
      border-radius: 50%;
      background-color: rgb(99, 183, 218);
      z-index: -1;
    }
  `}
`;

const Text = styled.div`
  position: absolute;
  top: -2.6rem;
  left: -70%;
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 1.8rem;
  font-weight: 700;
  ${p => p.isSelected && `
    top: -6.6rem
  `}
`;

const Line1 = styled.div`
  display: none;
  ${p => p.isSelected && 'display: block;'}
  position: absolute;
  bottom: 100%;
  left: calc(50% - .1rem );
  height: 4.2rem;
  width: 0.2rem;
  height: 4.3rem;
  background-color: rgb(0, 104, 179);
  z-index: -2;
`;

const Line2 = styled.div`
  display: none;
  ${p => p.isSelected && 'display: block;'}
  position: absolute;
  top: -4.4rem;
  left: -1.6rem;
  width: 5rem;
  height: 0.2rem;
  background-color: rgb(0, 104, 179);
`;

export default ({ text, isSelected, onClick, offset }) => (
  <Point offset={offset} isSelected={isSelected} onClick={onClick}>
    <Text isSelected={isSelected}>{text}</Text>
    <Line1 isSelected={isSelected} />
    <Line2 isSelected={isSelected} />
  </Point>
);
