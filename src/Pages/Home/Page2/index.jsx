/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
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
      Группа компаний Pola специализируется на перевозках наливных, навалочных и генеральных грузов на судах морского и речного флота,
      а также на судах класса “река-море”. Суммарная численность судов, находящихся в управлении компаний группы Polа,
      составляет более 90 ед. общим тоннажем более 900 тыс.т. Помимо этого группа обладает собственными судостроительными и судоремонтными мощностями.
    </MainText>
    <More to="/about">Подробнее</More>
    <Title right><Wave src={wave2} />Направления деятельности</Title>
    <Directions />
    <Link to="/actives"><MoreButton label="Подробнее" /></Link>
  </Page>
);
