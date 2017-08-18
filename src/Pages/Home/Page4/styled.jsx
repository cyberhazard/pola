import styled from 'styled-components';
import { Page as OriginalPage } from './../styled';

import Map from './../../../_assets/images/contact-map.png';

export const Page = styled(OriginalPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 18.6335403727%;
  padding-left: 100px;
  background-color: #012641;
`;

export const Contact = styled.div`
  width: 1180px;
  height: 672px;
  background: url(${Map}) no-repeat;
  background-size: cover;
  position: relative;
`;

export const Places = styled.div`
  width: 354px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #014a7f;
  padding: 27px 27px;
  opacity: 0.85;
`;

