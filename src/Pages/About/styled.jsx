import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from './../../_assets/images/home-page4-bg-rect.png';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 93.3333333333vh;
  background: white url('${bg}') top left no-repeat;
  background-size: 45.2rem;
`;

export const Title = styled.h2`
  color: black;
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
`;

export const Wave = styled.img`
  margin-right: 2.8rem;
  ${prop => prop.float && `
    position: absolute;
    top: 4.2rem;
    right: 0;
    margin-right: 0;
  `}
`;

export const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 4.9689440994%;
  padding-right: 12.4223602484%;
`;

export const Block = styled(Link)`
  position: relative;
  background-color: #fff;
  height: 25.2rem;
  flex-basis: 31.2977099237%;
  padding-top: 19rem;
  padding-left: 4.2rem;
  margin-bottom: 4rem;
  border: 0.2rem solid rgb(229, 229, 229);
  color: black;
  font-family: Lora;
  font-size: 2.8rem;
  font-weight: 700;
  transition: .4s;
  will-change: box-shadow;
  &:hover {
    box-shadow: .1rem .1rem 2.6rem black;
    transform: translate(-.1rem,-.1rem)
  }
`;

export const FloatImage = styled.img`
  position: absolute;
  ${p => p.css && p.css}
`;
