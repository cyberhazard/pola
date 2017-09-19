import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Translations from './_translations/menu';
import m from './media';

const Menu = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  margin-right: 2.2rem;
  flex-shrink: 0;
  opacity: 0;
  transition: .2s;
  ${m.tablet`
    width: 2rem;
  `}
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.626vh 1rem 2.626vh 0;
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 400;
  transition: .3s;
  border-bottom: .1rem solid rgba(68, 72, 76,0.2);
  &:first-child {
    border-top: .1rem solid rgba(68, 72, 76,0.2);
  }
  &:hover {
    color: #0397d6;
  }
  &.active ${Image} {
    opacity: 1;
  }
  &.active {
    color: #0397d6;
  }
`;

const Item = ({ exact, to, label, onClick }) => (
  <Link activeClassName="active" exact={exact} to={to} onClick={() => onClick && onClick()}>
    <Image src={require('./_assets/images/menu-active.png')} />
    <p>{label}</p>
  </Link>
);

const MenuComponent = ({ language, onClick }) => (
  <Menu>
    <Item onClick={onClick} exact to="/" label={Translations[language].home} />
    <Item onClick={onClick} to="/about" label={Translations[language].about} />
    <Item onClick={onClick} to="/services" label={Translations[language].services} />
    <Item onClick={onClick} to="/actives" label={Translations[language].actives} />
    <Item onClick={onClick} to="/news" label={Translations[language].news} />
    {/* <Item onClick={onClick} to="/stockholders" label={Translations[language].stockholders} /> */}
    <Item onClick={onClick} to="/contacts" label={Translations[language].contacts} />
  </Menu>
);

export default withRouter(connect(
  store => ({
    language: store.language,
  }),
)(MenuComponent));
