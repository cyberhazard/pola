import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Content, Header, Page, Text } from './styled';
import Breadscrubs from './../../../Components/Breadcrumbs';
import Button from './../../../Components/Button';
import Slider from './Slider';

const t = {
  RU: {
    description: <span>Компании Pola специализируются на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота, а также на судах класса “река-море”. Суммарная численность судов, находящихся в управлении компаний Polа, в ближайшее время составит более 90 ед. общим тоннажем более 1,7 млнт.<br /><br /></span>,
    list: (<span>Услуги компаний Pola<br />
      - Морские перевозки грузов<br />
      - Речные перевозки грузов<br />
      - Судостроительная и судоремонтная деятельность<br />
      - Услуги технического и кадрового менеджмента<br />
      - Комплексные логистические решения<br /></span>),
  },
  EN: {
    description: <span>Pola Group of Companies is specialized in the transportation of bulk and general cargoes on the vessels of the sea and river fleet, as well as on the vessels of the river-sea class. The total number of vessels operated by Pola Group of Companies in the near future will be more than 90 units with total tonnage over 1,7 million tons.<br /><br /></span>,
    list: (<span>Services of Pola Group of Companies<br />
      - Sea freight transportation<br />
      - River freight transportation<br />

      - Shipbuilding and ship repair activities<br />
      - Services of technical and personnel management<br />
      - Comprehensive logistics solutions<br /></span>),
  },
};

const Profile = ({ l }) => (
  <Page>
    <Breadscrubs to="/about" label={l === 'RU' ? 'О Pola' : 'About Pola'} current={l === 'RU' ? 'Профиль Pola' : 'Pola companies profile page'} />
    <Header>{l === 'RU' ? 'Профиль Pola' : 'Pola companies profile page'}</Header>
    <Content>
      <Text>
        {t[l].description}
        {t[l].list}
      </Text>
      <Slider />
    </Content>
    <Link to="/about/history">
      <Button label={l === 'RU' ? 'История' : 'History'} />
    </Link>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Profile);
