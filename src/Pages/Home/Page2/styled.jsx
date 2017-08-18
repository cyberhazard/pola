import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';

export const Page = OriginalPage.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding-right: 18.6335403727%;
  padding-left: 100px;
`;

export const Title = styled.div`
  height: 36px;
  color: black;
  font-family: Lora;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  ${p => p.right && 'text-align: right;'}
  ${p => p.left && 'transform: translateX(-100px);'}
`;

export const MainText = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5.6464646465vh;
  margin-bottom: 4.4343434343vh;
`;

export const Wave = styled.img`
  height: 11px;
  transform: translateY(-50%);
  margin-right: 24px;
`;
