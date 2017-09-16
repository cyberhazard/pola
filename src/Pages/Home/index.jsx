/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import { smoothScrollTo } from './../../helpers';
import m from './../../media';

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
  overflow: hidden;
  ${m.tablet`
    overflow: auto;
    overflow-x: hidden;
  `}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setScroll = this.setScroll.bind(this);
  }

  componentDidMount() {
    this.setScroll();
  }

  setScroll() {
    const el = this.cont;
    const self = this;
    el.addEventListener('wheel', function scroll({ deltaY }) {
      if (deltaY > 0) {
        smoothScrollTo(el, el.scrollTop + el.clientHeight, 800).then(() => self.setScroll());
        el.removeEventListener('wheel', scroll);
      }
      if (deltaY < 0) {
        smoothScrollTo(el, el.scrollTop - el.clientHeight, 800).then(() => self.setScroll());
        el.removeEventListener('wheel', scroll);
      }
    });
  }

  render() {
    return (
      <HomePage>
        <Content innerRef={c => this.cont = c}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Content>
      </HomePage>
    );
  }
}
