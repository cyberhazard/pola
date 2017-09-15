import React from 'react';
import styled from 'styled-components';
import HeaderText from './../../Components/HeaderText';
import { Ship1, Ship2, Ship4 } from './../Home/Page2/Directions/icons';
import Category from './Category';
import { transport } from './../../_fake_api/ships';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../_assets/images/structure/bg.png')}') top right no-repeat;
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
  & svg {
    margin-right: 2rem;
    height: 7.2rem;
    transform: translate(-1rem, 2rem);
  }
`;


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedID: '' };
    this.selectID = this.selectID.bind(this);
  }

  selectID(selectedID) {
    this.setState({ selectedID });
  }

  render() {
    const seaTransport = transport.filter(el => el.type === 'sea');
    return (
      <Page>
        <Header>Активы</Header>
        <Title><Ship2 />Транспортный флот</Title>
        <Category label="Морской" ships={seaTransport} selectedID={this.state.selectedID} selectID={this.selectID} />
        <Title><Ship1 />Вспомогательный флот</Title>
        <Title><Ship4 />Судостроительно-судоремонтные мощности</Title>
      </Page>
    );
  }
}
