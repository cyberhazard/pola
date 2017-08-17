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
    this.state = { language: 'RU', location: 'moscow' };
    this.changeLang = this.changeLang.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  changeLang(language) {
    this.setState({ language });
  }

  changeLocation(location) {
    this.setState({ location });
  }

  render() {
    return (
      <App>
        <Sidebar language={this.state.language} />
        <RightSide
          language={this.state.language}
          location={this.state.location}
          changeLang={this.changeLang}
          changeLocation={this.changeLocation}
        />
      </App>
    );
  }
}
