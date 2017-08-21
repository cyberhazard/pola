import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Header, Page, Text } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';
import Slider from './Slider';


export default () => (
  <Page>
    <Breadscrubs to="/about" label="О Группе" current="Профиль группы" />
    <Header>Профиль группы</Header>
    <Content>
      <Text>
        Многие программы электронной вёрстки и редакторы HTML используют
        Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым
        словам сразу показывает, как много веб-страниц всё ещё
        дожидаются своего настоящего рождения. За прошедшие годы текст Lorem
        Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые
        - намеренно, например, юмористические варианты. Если вам нужен Lorem Ipsum
        для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой
        в середине абзаца. Также все другие известные генераторы Lorem Ipsum
        используют один.
        За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии
        появились по ошибке, некоторые - намеренно, например, юмористические варианты.
        Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
        какой-нибудь шутки, скрытой в середине абзаца. Также все другие известные
        генераторы Lorem Ipsum используют один.
      </Text>
      <Slider />
    </Content>
    <Link to="/about/history">
      <Button label="История группы" />
    </Link>
  </Page>
);
