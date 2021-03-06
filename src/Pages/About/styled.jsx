import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from './../../_assets/images/home-page4-bg-rect.png';
import media from './../../media';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 93.3333333333vh;
  background: white url('${bg}') top left no-repeat;
  background-size: 45.2rem;
  overflow-x: hidden;
  ${media.ipad`
    padding-left: 4rem;
    padding-right: 4rem;
  `}
  ${media.tablet`
    min-height: 93.3333333333vh;
    padding-right: 2rem;
    height: auto;
  `}
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
  ${media.ipad`display: none;`}
  ${media.tablet`display: block;`}
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
  ${media.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
    flex-direction: column;
  `}
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
  @media (max-width: 1680px) {
    flex-basis: 35%;
  }
  &:hover {
    box-shadow: .1rem .1rem 2.6rem black;
    transform: translate(-.1rem,-.1rem);
  }
  @media (max-width: 1366px) {
    &:nth-child(6) .float-image {
      bottom: 0;
    }
  }
  @media (max-width: 1240px) {
    &:nth-child(3) .float-image {
      bottom: 6rem;
    }
    &:nth-child(6) .float-image {
      bottom: 4rem;
      right: -24rem;
    }
  }
  ${media.tablet`
    height: auto;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    font-size: 2.2rem;
  `}
`;

export const FloatImage = styled.img`
  position: absolute;
  ${p => p.css && p.css}
  ${media.tablet`
    display: none;
  `}
  @media (max-width: 1440px) {
    max-width: 260px;
    margin-right: 10rem;
  }
`;
