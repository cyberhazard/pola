import React from 'react';
import styled from 'styled-components';
import HeaderText from './../../Components/HeaderText';
import SerivcesItems from './ServicesItems';
import backg from './../../_assets/images/home-page4-bg-rect.png';
import m from './../../media';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-height: 93.3333333333vh;
  width: 100%;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 4rem;
  background: white url('${backg}') left top no-repeat;
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

export const Header = styled(HeaderText)`
  margin-bottom: 2.2rem;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page>
        <Header> Услуги </Header>
        <SerivcesItems />
      </Page>
    );
  }
}

