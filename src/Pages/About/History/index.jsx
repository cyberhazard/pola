import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Button from './../../../Components/Button';
import Slider from './Slider';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 93.3333333333vh;
  width: 100%;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background-color: white;
`;

const Header = styled(HeaderText)`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const Footer = styled.div`
  text-align: center;
`;

export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="История" />
    <Header>История</Header>
    <Slider />
    <Footer>
      <Link to="/about/lead">
        <Button label="Руководство групы" />
      </Link>
    </Footer>
  </Page>
);
