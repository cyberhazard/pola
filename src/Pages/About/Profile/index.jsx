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
        Группа компаний Pola специализируется на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота, а также на судах класса “река-море”. Суммарная численность судов, находящихся в управлении компаний группы Polа, составляет более 90 ед. общим тоннажем более 900 тыс.т. Помимо этого группа обладает собственными судостроительными и судоремонтными мощностями.<br /><br />
        Услуги группы компаний Pola<br />
        - Морские перевозки грузов<br />
        - Речные перевозки грузов<br />
        - Пассажирские перевозки и организация речных круизов<br />
        - Судостроительная и судоремонтная деятельность<br />
        - Услуги технического и кадрового менеджмента<br />
        - Комплексные логистические решения<br />
      </Text>
      <Slider />
    </Content>
    <Link to="/about/history">
      <Button label="История группы" />
    </Link>
  </Page>
);
