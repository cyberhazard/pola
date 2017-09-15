import styled from 'styled-components';
import { City, Item, Email } from './../../Home/Page4/Targets/styled';

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

export const CurrentCity = styled(City)`
  color:white;
  text-align: start;
  font-size: 2.4rem;
  margin-bottom:6.4rem;
  &:after{
    left: 0;
    bottom:-2.4rem;
  }
`;

export const CurrentEmail = styled(Email)`
  color:white;
  margin-left: 0;
  font-size:1.8rem;
`;
