/* eslint-disable max-len */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const circleTimer = keyframes`
  from {
    stroke-dashoffset: 112.3685531616211;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  user-select: none;
  cursor: pointer;
  ${({ isActive }) => isActive && 'transform: scale(1.2);'}
  & circle {
    ${({ isActive }) => isActive && `animation: ${circleTimer} 8s linear;`}
  }
`;

const Icon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  & circle {
    stroke-dasharray: 112.3685531616211;
    stroke-dashoffset: 112.3685531616211;
  }
`;

const Text = styled.div`
  font-size: 1.6rem;
  z-index: 2;
  color: white;
`;

const SVG = () => (
  <Icon width="40px" height="40px" viewBox="0 0 40 40">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <circle
        stroke="#00A39E"
        strokeWidth="3"
        fill="#2A3742"
        transform="translate(20.000000, 20.000000) rotate(-90.000000) translate(-20.000000, -20.000000)"
        cx="20"
        cy="20"
        r="18"
      />
    </g>
  </Icon>
);

export default ({ number, isActive, onClick }) => (
  <Circle isActive={isActive} onClick={onClick}>
    <SVG />
    <Text>0{number}</Text>
  </Circle>
);
