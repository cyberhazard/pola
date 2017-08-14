import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

const Menu = styled.div`
  flex-shrink: 0;
`;

const Image = styled.img`
  margin-right: 22px;
  flex-shrink: 0;
  opacity: 0;
  transition: .2s;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 26px 0;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  transition: .3s;
  border-bottom: 1px solid rgba(68, 72, 76,0.2);
  &:first-child {
    border-top: 1px solid rgba(68, 72, 76,0.2);
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


const Item = ({ exact, to, label }) => (
  <Link exact={exact} to={to}>
    <Image src={require('./_assets/images/menu-active.png')} />
    <p>{label}</p>
  </Link>
);

export default () => (
  <Menu>
    <Item exact to="/" label="Главная" />
    <Item to="/about" label="О группе" />
    <Item to="/services" label="Услуги" />
    <Item to="/actives" label="Активы" />
    <Item to="/news" label="Новости" />
    <Item to="/stockholders" label="Акционерам и инвесторам" />
    <Item to="/contacts" label="Контакты" />
  </Menu>
);
