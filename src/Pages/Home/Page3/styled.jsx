import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';

export const Page = styled(OriginalPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-right: 18.6335403727%;
  padding-left: 10rem;
  background-color: #004980;
`;

export const Header = styled.h2`
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  transform: translateX(-10rem);
  margin-bottom: 4.6rem;
`;

export const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Block = styled.div`
  background-color: #fff;
  padding: 3.8rem;
  flex-basis: 46%;
  margin-bottom: 3.8383838384vh;
`;

export const Text = styled.p`
  color: rgb(0, 0, 0);
  font-size: 1.8rem;
  line-height: 3rem;
  font-family: Roboto;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const TimeStamp = styled.div`
  display: inline-block;
  color: rgb(148, 148, 148);
  font-family: Roboto;
  font-size: 1.3rem;
  font-weight: 400;
  position: relative;
  transform: translateX(3.6rem);
  &:before {
    content: '';
    position: absolute;
    top: 25%;
    right: calc(100% + .6rem);
    width: 3rem;
    height: .1rem;
    background-color: rgb(148, 148, 148);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Last = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 46%;
`;
