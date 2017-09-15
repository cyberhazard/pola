import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import { Data, CurrentCity, Element, CurrentEmail } from './styled';

export const Angle = styled(Icon)`
  margin: 0 1.1rem 0 0;
  font-size: 1.6rem;
`;

export default () => (
  <Data>
    <CurrentCity> Москва </CurrentCity>
    <Element> <Angle name="map-marker" /> Пресненская наб. д.6 стр. 2 </Element>
    <Element> <Angle name="phone" /> +7 (495) 055-12-12 </Element>
    <CurrentEmail> <Angle name="envelope" /> moscow@pola-group.com </CurrentEmail>
  </Data>
);
