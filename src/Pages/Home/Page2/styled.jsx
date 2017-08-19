import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';
import bg1 from './../../../_assets/images/home-page2-bg-rect.png';
import bg2 from './../../../_assets/images/home-page2-bg-ship.png';

export const Page = OriginalPage.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-right: 18.6335403727%;
  padding-left: 10rem;
  background-image: url('${bg2}') , url('${bg1}');
  background-position: bottom right, top right;
  background-repeat: no-repeat, no-repeat;
`;

export const Title = styled.div`
  height: 3.6rem;
  color: black;
  font-family: Lora;
  font-size: 3.6rem;
  font-weight: 700;
  width: 100%;
  ${p => p.right && 'text-align: right;'}
  ${p => p.left && 'transform: translateX(-10rem);'}
`;

export const MainText = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 5.6464646465vh;
  margin-bottom: 4.4343434343vh;
`;

export const Wave = styled.img`
  height: 1.1rem;
  transform: translateY(-50%);
  margin-right: 2.4rem;
`;
