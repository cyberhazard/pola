/* eslint-disable max-len */
import React from 'react';
import More from '../../../Components/ShowMore';
import { MainText, Page, Title, Wave } from './styled';
import Directions from './Directions';
import MoreButton from './../../../Components/Button';

import wave1 from '../../../_assets/images/wave1.png';
import wave2 from '../../../_assets/images/wave2.png';

export default () => (
  <Page>
    <Title left><Wave src={wave1} />О группе</Title>
    <MainText>
      Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам
      сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem
      Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно, например, юмористические варианты.
    </MainText>
    <More to="/">Подробнее</More>
    <Title right><Wave src={wave2} />Направления деятельности</Title>
    <Directions />
    <MoreButton label="Подробнее" />
  </Page>
);
