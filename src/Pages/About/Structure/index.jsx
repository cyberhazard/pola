import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './../../../Components/Button';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Block from './Block';
import m from './../../../media';
import t from './t';

import ship1 from './../../../_assets/images/structure/ship1.png';
// import ship2 from './../../../_assets/images/structure/ship2.png';
// import ship3 from './../../../_assets/images/structure/ship3.png';
import ship4 from './../../../_assets/images/structure/ship4.png';
// import ship5 from './../../../_assets/images/structure/bauxite.JPG';
// import ship6 from './../../../_assets/images/structure/ship6.png';import ship6 from './../../../_assets/images/structure/ship6.png';
import ship9 from './../../../_assets/images/structure/ship9.jpg';
import ship8 from './../../../_assets/images/structure/ship8.png';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../../_assets/images/structure/bg.png')}') top right no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 5rem;
`;


const Structure = ({ l }) => (
  <Page>
    <Breadcrumbs to="/about" label={l === 'RU' ? 'О Pola' : 'About'} current={l === 'RU' ? 'Компании Pola' : 'Pola companies'} />
    <Header>{l === 'RU' ? 'Компании Pola' : 'Pola Companies'}</Header>
    <Block l={l} img={ship1} header={t[l][0].name} link={t[l][0].site} >
      { t[l][0].text }
    </Block>
    <Block l={l} right img={ship9} header={t[l][1].name} link={t[l][1].site}>
      { t[l][1].text }
    </Block>
    <Block l={l} img={ship4} header={t[l][2].name} >
      { t[l][2].text }
    </Block>
    <Block l={l} right img={ship8} header={t[l][3].name} >
      { t[l][3].text }
    </Block>
    <Footer>
      <Link to="/about/profile">
        <Button label={l === 'RU' ? 'Профиль компаний Pola' : 'Pola companies Profile Page'} />
      </Link>
    </Footer>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Structure);
