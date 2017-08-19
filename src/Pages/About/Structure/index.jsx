import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './../../../Components/Breadcrumbs';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  background-color: white;
  padding-top: 6.2626262626vh;
`;

export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="Структура группы" />
  </Page>
);
