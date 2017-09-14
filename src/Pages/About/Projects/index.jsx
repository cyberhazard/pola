import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Block from './../Structure/Block';

import ship1 from './../../../_assets/images/structure/ship1.png';
import ship2 from './../../../_assets/images/structure/ship2.png';
import ship3 from './../../../_assets/images/structure/ship3.png';
import ship4 from './../../../_assets/images/structure/ship4.png';
import ship5 from './../../../_assets/images/structure/ship5.png';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../../_assets/images/structure/bg.png')}') top right no-repeat;
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="Проекты" />
    <Header>Структура группы</Header>
    <Block header="Проект «RSD-59»" top more="rsd-59" img={ship1}>
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
      например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
      Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки...
    </Block>
    <Block header="Проект «RSD-59»" top more="rsd-59" img={ship2} right>
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
      например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
      Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки...
    </Block>
    <Block header="Проект «RSD-59»" top more="rsd-59" img={ship3}>
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
      например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
      Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки...
    </Block>
    <Block header="Проект «RSD-59»" top more="rsd-59" img={ship4} right>
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
      например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
      Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки...
    </Block>
    <Block header="Проект «RSD-59»" top more="rsd-59" img={ship5}>
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации,
      например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
      Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки...
    </Block>
  </Page>
);
