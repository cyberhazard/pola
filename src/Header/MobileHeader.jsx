import React from 'react';
import styled from 'styled-components';
import m from './../media';

import Select from './../Components/Select';
import { country } from './index';
import flagRU from './../_assets/images/flag-ru.jpg';
import flagEN from './../_assets/images/flag-en.jpg';

const MobileHeader = styled.div`
  display: none;
  ${m.tablet`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.6666666667vh;
    background-color: black;
    padding: 0 4rem;
  `}
`;

const Hamburger = styled.img`

`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MobileHeader>
        <Hamburger src={require('./../_assets/images/hamburger.png')} />
        <Select
          height="100%"
          width="12.6rem"
          label={this.props.language === 'RU' ? country('RU', flagRU) : country('EN', flagEN)}
          values={[{ value: 'RU', name: country('RU', flagRU) }, { value: 'EN', name: country('EN', flagEN) }]}
          onChange={this.props.changeLang}
          backgroundColor="rgba(255,255,255,0.1)"
        />
      </MobileHeader>
    );
  }
}
