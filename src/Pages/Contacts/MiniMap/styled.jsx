import styled from 'styled-components';
import m from './../../../media';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  ${m.tablet`
    display: none;
  `}
`;

export const MiniMapa = styled.img`
  margin-right: 1.8rem;
`;

export const Show = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 400;
  border-bottom: 0.3rem dotted #ffffff;
  cursor: pointer;
  transition:0.3s;
  &:hover{
    color: #0168b3;
    border-bottom: 0.3rem dotted #0168b3;
  }
`;
