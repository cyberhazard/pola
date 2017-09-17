import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';
import bg1 from './../../../_assets/images/home-page2-bg-rect.png';
import bg2 from './../../../_assets/images/home-page2-bg-ship.png';
import m from './../../../media';

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
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding: 8rem 4rem;
    height: auto;
  `}
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
  ${m.tablet`
    height: auto;
    text-align: left;
    padding-top: 2rem;
  `}
`;

export const MainText = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 5.6464646465vh;
  margin-bottom: 4.4343434343vh;
  line-height: 3.4rem;
`;

export const Wave = styled.img`
  height: 1.1rem;
  transform: translateY(-50%);
  margin-right: 2.4rem;

`;
