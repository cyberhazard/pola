import styled from 'styled-components';
import m from './../../../media';

export const Footer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  margin-top: 8.4rem;
  ${m.tablet`
    display: block;
    text-align: center;
  `}
`;

export const Logo = styled.img`
`;
export const LeftSide = styled.div`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 6.7rem;
  font-family: Roboto;

`;
export const RightSide = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: flex-start;
  ${m.tablet`
    flex-direction: row;
    justify-content: space-around;
  `}
`;

export const Text = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 500;
  align-self: flex-end;
  margin-bottom: 0.8rem;
  ${m.tablet`
    align-self: flex-start;
  `}
`;

