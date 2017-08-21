import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Button from './../../../Components/Button';
import Slider from './Slider';

import bg1 from './../../../_assets/images/home-page3-bg-rect2.png';
import bg2 from './../../../_assets/images/home-page2-bg-rect.png';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background-color: white;
  background-image: url('${bg1}'), url('${bg2}');
  background-position: bottom right, top right;
  background-repeat: no-repeat, no-repeat;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

const Header = styled(HeaderText)`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="Руководство" />
    <Header>Руководство</Header>
    <Slider />
    <Footer>
      <Link to="/about/geography">
        <Button label="География" />
      </Link>
    </Footer>
  </Page>
);
