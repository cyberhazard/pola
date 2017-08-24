import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';

import bg1 from './../../../_assets/images/home-page3-bg-rect.png';
import bg2 from './../../../_assets/images/home-page3-bg-rect2.png';

export const Page = styled(OriginalPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-right: 18.6335403727%;
  padding-left: 10rem;
  background-color: #004980;
  background-image: url('${bg1}') , url('${bg2}');
  background-position: bottom right, top left;
  background-repeat: no-repeat, no-repeat;
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

export const Last = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 46%;
`;
