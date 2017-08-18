import React from 'react';
import styled from 'styled-components';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const HomePage = styled.div`
  width: 100%;
  height: 93.3333333333vh;
`;

const Content = styled.div`
  height: 93.3333333333vh;
  overflow-y: auto;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomePage>
        <Content>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Content>
      </HomePage>
    );
  }
}
