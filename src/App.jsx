import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import RightSide from './RightSide';

const App = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'RU' };
    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(language) {
    this.setState({ language });
  }

  render() {
    return (
      <App>
        <Sidebar language={this.state.language} />
        <RightSide language={this.state.language} changeLang={this.changeLang} />
      </App>
    );
  }
}
