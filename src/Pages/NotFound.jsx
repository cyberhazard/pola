import React from 'react';
import PageTemplate from './../Components/PageTemplate';
import Breadcrumbs from './../Components/Breadcrumbs';
import Header from './../Components/HeaderText';

export default () => (
  <PageTemplate full>
    <Breadcrumbs to="/" label="Главная" current="Неверное направление" />
    <Header>Извините, данной страницы не существует</Header>
  </PageTemplate>
);
