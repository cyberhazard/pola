import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Content, Header, Page, Text } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';
import Slider from './Slider';

const t = {
  RU: {
    description: <span>Группа компаний Pola специализируется на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота, а также на судах класса “река-море”. Суммарная численность судов, находящихся в управлении компаний группы Polа, составляет более 90 ед. общим тоннажем более 900 тыс.т. Помимо этого группа обладает собственными судостроительными и судоремонтными мощностями.<br /><br /></span>,
    list: (<span>Услуги группы компаний Pola<br />
      - Морские перевозки грузов<br />
      - Речные перевозки грузов<br />
      - Пассажирские перевозки и организация речных круизов<br />
      - Судостроительная и судоремонтная деятельность<br />
      - Услуги технического и кадрового менеджмента<br />
      - Комплексные логистические решения<br /></span>),
  },
  EN: {
    description: <span>Pola Group of Companies is specialized in the transportation of bulk and general cargoes on the vessels of the sea and river fleet, as well as on the vessels of the river-sea class. The total number of vessels operated by Pola Group of Companies is more than 90 units with total tonnage over 900 thousand tons. In addition, the group has its own shipbuilding and ship repair facilities.<br /><br /></span>,
    list: (<span>Services of Pola Group of Companies<br />
      - Sea freight transportation<br />
      - River freight transportation<br />
      - Passenger transportation and river cruise organization<br />
      - Shipbuilding and ship repair activities<br />
      - Services of technical and personnel management<br />
      - Comprehensive logistics solutions<br /></span>),
  },
};

const Profile = ({ l }) => (
  <Page>
    <Breadscrubs to="/about" label={l === 'RU' ? 'О группе' : 'About group'} current={l === 'RU' ? 'Профиль группы' : 'Group\'s profile page'} />
    <Header>{l === 'RU' ? 'Профиль группы' : 'Group\'s profile page'}</Header>
    <Content>
      <Text>
        {t[l].description}
        {t[l].list}
      </Text>
      <Slider />
    </Content>
    <Link to="/about/history">
      <Button label={l === 'RU' ? 'История группы' : 'History'} />
    </Link>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Profile);
