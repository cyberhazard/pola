/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import More from '../../../Components/ShowMore';
import { MainText, Page, Title, Wave } from './styled';
import Directions from './Directions';
import MoreButton from './../../../Components/Button';

import wave1 from '../../../_assets/images/wave1.png';
import wave2 from '../../../_assets/images/wave2.png';

const t = {
  RU: {
    header: `Группа компаний Pola специализируется на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота,
    а также на судах класса “река-море”. Суммарная численность судов, находящихся в управлении компаний группы Polа,
    составляет более 90 ед. общим тоннажем более 900 тыс.т. Помимо этого группа обладает собственными судостроительными и судоремонтными мощностями.`,
  },
  EN: {
    header: `The area of business of Pola Group of Companies involves transportation of bulk and general cargoes on the vessels of the sea and river fleet,
    as well as on the vessels of the river-sea class. The total number of vessels operated by the Pola Group of Companies is more than 90 units with
    total tonnage over 900 thousand tons. In addition, the group has its own shipbuilding and ship repair facilities.`,
  },
};

export default ({ l }) => (
  <Page>
    <Title left><Wave src={wave1} />{l === 'RU' ? 'О группе' : 'About group' }</Title>
    <MainText>
      {t[l].header}
    </MainText>
    <More to="/about">{l === 'RU' ? 'Подробнее' : 'More' }</More>
    <Title right><Wave src={wave2} />{l === 'RU' ? 'Направления деятельности' : 'Activities'}</Title>
    <Directions l={l} />
    <Link to="/actives"><MoreButton label={l === 'RU' ? 'Подробнее' : 'More'} /></Link>
  </Page>
);
