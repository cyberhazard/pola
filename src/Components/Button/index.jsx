import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  width: 250px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  background-color: #0168b3;
  border: none;
  padding: 22px 64px;
  position: relative;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    top: -10px;
    left: 30px;
    width: 231px;
    height: 100%;
    background-color: rgba(3, 151, 214,0.6);
    z-index: -1;
  }
`;

const Text = styled.span`
  color: #ffffff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
`;

export default ({ label }) => (
  <Wrapper>
    <Button>
      <Text>{label} </Text>
    </Button>
  </Wrapper>
);
