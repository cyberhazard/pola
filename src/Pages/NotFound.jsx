import React from 'react';
import styled from 'styled-components';
import PageTemplate from './../Components/PageTemplate';
import Breadcrumbs from './../Components/Breadcrumbs';
import HeaderText from './../Components/HeaderText';

const Header = styled(HeaderText)`
  margin-top: 2.8rem;
  margin-bottom: 3.1rem;
`;

export default () => (
  <PageTemplate full>
    <Breadcrumbs to="/" label="Главная" current="Неверное направление" />
    <Header>Извините, данной страницы не существует</Header>
  </PageTemplate>
);
