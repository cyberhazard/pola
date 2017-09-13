import React from 'react';
import { Content, Header, Page, Text, Img, Block } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';

import map from './../../../_assets/images/geo-map.png';

export default () => (
  <Page>
    <Breadscrubs to="/about" label="О Группе" current="География" />
    <Header>География</Header>
    <Content>
      <Text>
      Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum
      в качестве текста по умолчанию, так что поиск по ключевым словам  сразу показывает,
      как много веб-страниц всё ещё дожидаются своего настоящего рождения.
      За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились
      по ошибке, некоторые - намеренно, например, юмористические варианты. Если вам нужен
      Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки
      скрытой в середине абзаца. Также все другие известные генераторы Lorem Ipsum используют один
      </Text>
      <Img src={map} />
    </Content>
    <Block to="/about/projects">
      <Button label="Проекты" />
    </Block>
  </Page>
);
