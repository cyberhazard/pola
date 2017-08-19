import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

const Menu = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  margin-right: 2.2rem;
  flex-shrink: 0;
  opacity: 0;
  transition: .2s;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.626vh 0;
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

const Translations = {
  RU: {
    home: 'Главная',
    about: 'О группе',
    services: 'Услуги',
    actives: 'Активы',
    news: 'Новости',
    stockholders: 'Акционерам и инвесторам',
    contacts: 'Контакты',
  },
  EN: {
    home: 'Home',
    about: 'About Group',
    services: 'Services',
    actives: 'Actives',
    news: 'News',
    stockholders: 'Stackholders and investors',
    contacts: 'Contacts',
  },
};


const Item = ({ exact, to, label }) => (
  <Link exact={exact} to={to}>
    <Image src={require('./_assets/images/menu-active.png')} />
    <p>{label}</p>
  </Link>
);

export default ({ language }) => (
  <Menu>
    <Item exact to="/" label={Translations[language].home} />
    <Item to="/about" label={Translations[language].about} />
    <Item to="/services" label={Translations[language].services} />
    <Item to="/actives" label={Translations[language].actives} />
    <Item to="/news" label={Translations[language].news} />
    <Item to="/stockholders" label={Translations[language].stockholders} />
    <Item to="/contacts" label={Translations[language].contacts} />
  </Menu>
);
