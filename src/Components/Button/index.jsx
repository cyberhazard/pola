import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Button = styled.button`
  width: 25rem;
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
  background-color: #0168b3;
  border: none;
  padding: 2.2rem 6.4rem;
  position: relative;
  cursor: pointer;
  :before {
    content: '';
    position: absolute;
    top: -1rem;
    left: 3rem;
    width: 23.1rem;
    height: 100%;
    background-color: rgba(3, 151, 214,0.6);
    z-index: -1;
  }
`;

const Text = styled.span`
  color: #ffffff;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 500;
`;

export default ({ label }) => (
  <Wrapper>
    <Button>
      <Text>{label} </Text>
    </Button>
  </Wrapper>
);
