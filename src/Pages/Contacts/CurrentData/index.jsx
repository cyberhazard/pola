import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
import { Data, CurrentCity, Element, CurrentEmail } from './styled';

import locations from './../../../locations';

export const Angle = styled(Icon)`
  margin: 0 1.1rem 0 0;
  font-size: 1.6rem;
`;

const CurrentData = ({ l, loc }) => (
  <Data>
    <CurrentCity>{locations[loc][l].title}</CurrentCity>
    <Element> <Angle name="map-marker" />{locations[loc][l].address}</Element>
    <Element> <Angle name="phone" />{locations[loc][l].phone}</Element>
    <CurrentEmail> <Angle name="envelope" /> {locations[loc][l].email} </CurrentEmail>
  </Data>
);
export default connect(
  state => ({ l: state.language, loc: state.location }),
)(CurrentData);
