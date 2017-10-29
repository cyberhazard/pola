import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Button from './../../../Components/Button';
import Slider from './Slider';
import m from './../../../media';

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
  background: white url('${require('./../../../_assets/images/home-page2-bg-ship.png')}') bottom right no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 3rem;
    padding-right: 3rem;
    height: auto;
  `}
`;

const Header = styled(HeaderText)`
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const Footer = styled.div`
  text-align: center;
`;

const History = ({ l }) => (
  <Page>
    <Breadcrumbs to="/about" label={l === 'RU' ? 'О группе' : 'About group'} current={l === 'RU' ? 'История' : 'History'} />
    <Header>{l === 'RU' ? 'История' : 'History'}</Header>
    <Slider l={l} />
    <Footer>
      <Link to="/about/lead">
        <Button label={l === 'RU' ? 'Руководство групы' : 'Management'} />
      </Link>
    </Footer>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(History);
