import styled from 'styled-components';
import m from './../media';

export const Icon = styled.img`
  height: 1.4rem;
  margin-right: 1.2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Cover = styled.div`
  width: 100%;
  background-color: rgba(0,0,0,0.8);
  ${m.tablet`
    display: none;
  `}
`;

export const Header = styled.div`
  max-width: 144rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.6666666667vh;
  margin: 0 auto;
  border-bottom: .1rem solid #44484c;
  flex-shrink: 0;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 7.4534161491%;
  width: 21.2rem;
  ${m.tablet`
    width: auto;
    font-size: 2rem;
    margin-bottom: 2rem;
  `}
`;
