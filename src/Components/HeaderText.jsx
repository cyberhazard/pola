import styled from 'styled-components';

export default styled.h2`
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  transform: translateX(-${p => (p.offset ? p.offset : '10rem')});
  padding-left: 10.6rem;
  position: relative;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 2.5rem;
    left: 0;
    height: 1.1rem;
    width: 7.9rem;
    transform: translateY(-50%);
    background: url(${require('./../_assets/images/wave1.png')}) top left no-repeat;
  }
`;
