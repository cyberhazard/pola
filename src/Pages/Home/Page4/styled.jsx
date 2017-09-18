import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';
import m from './../../../media';

import map from './../../../_assets/images/contact-map.png';
import bg1 from './../../../_assets/images/home-page4-bg-rect.png';
import bg2 from './../../../_assets/images/home-page4-bg-rect2.png';

export const Page = styled(OriginalPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 18.6335403727%;
  padding-left: 10rem;
  background-color: #012641;
  background-image: url('${bg2}') , url('${bg1}');
  background-position: bottom right, top left;
  background-repeat: no-repeat, no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding: 8rem 4rem;
    height: auto;
    display: block;
  `}
`;

export const Contact = styled.div`
  background: url(${map}) no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Contacts = styled.div`
  width: 100%;
  height: 67.8787878788vh;
  position: relative;
  ${m.tablet`
    width: 100%;
    height: auto;
  `}
`;

export const Places = styled.div`
  width: 35.4rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #014a7f;
  padding: 2.7rem 2.7rem;
  opacity: 0.85;
  ${m.tablet`
    width: 100%;
    height: auto;
    position: static;
  `}
`;

