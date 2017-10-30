import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import { Wrap, MiniMapa, Show } from './styled';

import Map from './../../../_assets/images/mini-map.png';

export const Angle = styled(Icon)`
  margin: 0 0 0 0.8rem;
  font-size: 1.6rem;
`;

export default ({ l }) => (
  <Wrap>
    <MiniMapa src={Map} />
    <Show>{l === 'RU' ? 'Показать на карте' : 'Show on map'} <Angle name="angle-right" /> </Show>
  </Wrap>
);
