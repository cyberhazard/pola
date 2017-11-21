import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import HeaderText from './../../Components/HeaderText';
import { Ship1, Ship2 } from './../Home/Page2/Directions/icons';
import Category from './Category';
import Preview from './Preview';
import shipsData from './../../_fake_api/ships';
import m from './../../media';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../_assets/images/structure/bg.png')}') top right no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

const Title = styled.div`
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  ${m.tablet`
    font-size: 2.4rem;
  `}
  & svg {
    margin-right: 2rem;
    height: 7.2rem;
    transform: translate(-1rem, 2rem);
    ${m.tablet`
      margin-right: 0;
    `}
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Ships = styled.div`
  max-width: 75.1rem;
  ${m.ipad`
   max-width: 60rem;
  `}
`;


class Actives extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedID: '' };
    this.selectID = this.selectID.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  selectID(selectedID) {
    this.setState({ selectedID });
  }

  closePopup() {
    this.setState({ selectedID: '' });
  }

  render() {
    const { l } = this.props;
    const seaTransport = shipsData.filter(el => el.type === 'sea' && el.category === 'transport');
    const riverTransport = shipsData.filter(el => el.type === 'river' && el.category === 'transport');
    const riverseaTransport = shipsData.filter(el => el.type === 'riversea' && el.category === 'transport');
    const towSupply = shipsData.filter(el => el.type === 'tow' && el.category === 'supply');
    const craneSupply = shipsData.filter(el => el.type === 'crane' && el.category === 'supply');
    const otherSupply = shipsData.filter(el => el.type === 'other' && el.category === 'supply');
    const selected = shipsData.find(el => el.id === this.state.selectedID);
    return (
      <Page>
        <Header>{l === 'RU' ? 'Активы' : 'Actives'}</Header>
        <Content>
          <Ships>
            <Title><Ship2 />{l === 'RU' ? 'Транспортный флот' : 'Transport fleet'}</Title>
            <Category l={l} label={l === 'RU' ? 'Морской' : 'Maritime fleet'} ships={seaTransport} selectedID={this.state.selectedID} selectID={this.selectID} />
            <Category l={l} empty label={l === 'RU' ? 'Речной флот' : 'River fleet '} ships={riverTransport} selectedID={this.state.selectedID} selectID={this.selectID} />
            <Category l={l} empty label={l === 'RU' ? 'Флот река-море' : 'sea-river fleet '} ships={riverseaTransport} selectedID={this.state.selectedID} selectID={this.selectID} />
            <Title><Ship1 />{l === 'RU' ? 'Вспомогательный флот' : 'Auxiliary fleet'}</Title>
            <Category l={l} empty label={l === 'RU' ? 'Буксиры' : 'Tug boat'} ships={towSupply} selectedID={this.state.selectedID} selectID={this.selectID} />
            <Category l={l} empty label={l === 'RU' ? 'Плавкраны' : 'floating crane'} ships={craneSupply} selectedID={this.state.selectedID} selectID={this.selectID} />
            <Category l={l} empty label={l === 'RU' ? 'Прочее' : 'etc'} ships={otherSupply} selectedID={this.state.selectedID} selectID={this.selectID} />
          </Ships>
          <Preview l={l} {...selected} close={this.closePopup} />
        </Content>
      </Page>
    );
  }
}

export default connect(
  state => ({ l: state.language }),
)(Actives);
