/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import More from '../../../Components/ShowMore';
import { MainText, Page, Title, Wave } from './styled';
import Directions from './Directions';
import MoreButton from './../../../Components/Button';

import wave1 from '../../../_assets/images/wave1.png';
import wave2 from '../../../_assets/images/wave2.png';

const MButton = styled(MoreButton)`
  margin-top: 2rem;
`;

const t = {
  RU: {
    header: `Компании Pola специализируется на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота,
    а также на судах класса “река-море”. Суммарный дедвейт судов, находящихся в управлении компаний  Polа,
    в ближайщшее время составит более 1 млн. тонн.`,
  },
  EN: {
    header: `The area of business of Pola Companies involves transportation of bulk and general cargoes on the vessels of the sea and river fleet,
    as well as on the vessels of the river-sea class.
    The total deadweight of the vessels under the control of the Pola companies ,
    in the nearest time will be more than 1 million tons.`,
  },
};

export default ({ l }) => (
  <Page>
    <Title left><Wave src={wave1} />{l === 'RU' ? 'О компаниях Pola' : 'About Pola companies' }</Title>
    <MainText>
      {t[l].header}
    </MainText>
    <More to="/about">{l === 'RU' ? 'Подробнее' : 'More' }</More>
    <Title right><Wave src={wave2} />{l === 'RU' ? 'Направления деятельности' : 'Activities'}</Title>
    <Directions l={l} />
    <Link to="/actives"><MButton label={l === 'RU' ? 'Подробнее' : 'More'} /></Link>
  </Page>
);
