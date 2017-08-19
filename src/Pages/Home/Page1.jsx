import React from 'react';
import styled from 'styled-components';
import { Page as OriginalPage } from './styled';
import Button from './../../Components/Button';
import PageDownButton from './../../Components/PageDownButton';
import Navigation from './../../Components/Navigation';

const Text = styled.div`
  width: 54.0372670807%;
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 4rem;
  font-weight: 700;
  line-height: 6.2rem;
  margin-bottom: 9.2929292929vh;
`;

const Page = OriginalPage.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6.2111801242%;
`;

export default () => (
  <Page>
    <Text>
    Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование, складская логистика
    </Text>
    <Button label="Подробнее" />
    <PageDownButton />
    <Navigation abs />
  </Page>
);
