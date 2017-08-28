import React from 'react';
import styled from 'styled-components';
import { Icon as Ficon } from 'react-fa';
import m from './../media';

import Select from './../Components/Select';
import { country, getAddresses } from './index';
import { Icon, Contact } from './styled.js';
import locations from './../locations';
import flagRU from './../_assets/images/flag-ru.jpg';
import flagEN from './../_assets/images/flag-en.jpg';
import mapFlag from './../_assets/images/map-flag.png';
import iconPhone from './../_assets/images/icon-phone.png';
import mapPin from './../_assets/images/map-pin.png';
import Menu from './../Menu';
import Logo from './../Logo';

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

const Hamburger = styled.img``;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 10;
`;

const Top = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

const Close = styled.button`
  color: white;
  font-size: 2.6rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 92vh;
`;

const LeftSide = styled.div`
  flex: 0 0 50%;
`;

const RightSide = styled.div`
  flex: 0 0 50%;
`;

const Label = styled.div`
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 2.5rem;
  font-weight: 500;
  margin-top: 5rem;
  margin-bottom: 4rem;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  }

  render() {
    return (
      <MobileHeader>
        <Hamburger src={require('./../_assets/images/hamburger.png')} onClick={this.toggleOpen} />
        <Select
          height="100%"
          width="12.6rem"
          label={this.props.language === 'RU' ? country('RU', flagRU) : country('EN', flagEN)}
          values={[{ value: 'RU', name: country('RU', flagRU) }, { value: 'EN', name: country('EN', flagEN) }]}
          onChange={this.props.changeLang}
          backgroundColor="rgba(255,255,255,0.1)"
        />
        {
          this.state.isOpen && <MobileMenu>
            <Top>
              <Close onClick={this.toggleOpen}>
                <Ficon name="times" />
              </Close>
              <Select
                left
                height="100%"
                width="22.8rem"
                onChange={this.props.changeLocation}
                backgroundColor="#0168b3"
                label={locations[this.props.location][this.props.language].title}
                values={getAddresses(locations, this.props.language)}
                icon={mapFlag}
                iconStyle="height: 1.7rem; margin-right: 1.2rem;"
              />
            </Top>
            <Content>
              <LeftSide>
                <Menu language={this.props.language} onClick={this.toggleOpen} />
              </LeftSide>
              <RightSide>
                <Logo transparent />
                <Label>Контакты:</Label>
                <Contact>
                  <Icon src={mapPin} />
                  {locations[this.props.location][this.props.language].address}
                </Contact>
                <Contact>
                  <Icon src={iconPhone} />
                  {locations[this.props.location][this.props.language].phone}
                </Contact>
              </RightSide>
            </Content>
          </MobileMenu>
        }
      </MobileHeader>
    );
  }
}
