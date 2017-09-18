import styled from 'styled-components';
import { Item, Email } from './../../Home/Page4/Targets/styled';

export const Data = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items:flex-start;
  margin-bottom: 11rem;
`;

export const Element = styled(Item)`
  color:white;
  margin-left: 0;
  font-size:1.8rem;
  margin-bottom:3.2rem;
`;

export const CurrentCity = styled.div`
  font-family: Roboto;
  font-size: 2.4rem;
  font-weight: 700;
  position:relative;
  margin-bottom:6.4rem;
  width: 100%;
  text-align:center;
  color:white;
  text-align:left;
  &:after{
    content: '';
    position: absolute;
    bottom: -1.4rem;
    left: 0%;
    width: 3.6rem;
    border-bottom: .2rem solid #0168b3;
  }

`;

export const CurrentEmail = styled(Email)`
  color:white;
  margin-left: 0;
  font-size:1.8rem;
  cursor: pointer;
`;
