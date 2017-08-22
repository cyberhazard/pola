import React from 'react';
import styled from 'styled-components';
import HeaderText from './../../Components/HeaderText';
import SerivcesItems from './ServicesItems';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 93.3333333333vh;
  width: 100%;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background-color: white;
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

