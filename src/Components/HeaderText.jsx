import styled from 'styled-components';

export default styled.h2`
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  transform: translateX(-${p => (p.offset ? p.offset : '10rem')});
  &:before {
    content: '';
    display: inline-block;
    margin-right: 2.7rem;
    height: 1.1rem;
    width: 7.9rem;
    transform: translateY(-50%);
    background: url(${require('./../_assets/images/wave1.png')}) top left no-repeat;
  }
`;
