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
    this.state = {};
  }
  render() {
    return (
      <App>
        <Sidebar />
        <RightSide />
      </App>
    );
  }
}
