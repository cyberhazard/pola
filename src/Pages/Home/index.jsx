/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import { polyfill } from 'smoothscroll-polyfill';
import PageDownButton from './../../Components/PageDownButton';
import m from './../../media';
// import { smoothScrollTo } from './../../helpers';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

polyfill();

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
    this.state = { topSlide: true };
    this.setScroll = this.setScroll.bind(this);
    this.scrollButton = this.scrollButton.bind(this);
  }

  componentDidMount() {
    this.setScroll();
  }

  setScroll() {
    const el = this.cont;
    const self = this;
    el.addEventListener('wheel', function scroll({ deltaY }) {
      if (deltaY > 0) {
        el.scrollBy({ top: el.clientHeight, left: 0, behavior: 'smooth' });
        el.removeEventListener('wheel', scroll);
        setTimeout(self.setScroll, 700);
      }
      if (deltaY < 0) {
        el.scrollBy({ top: -el.clientHeight, left: 0, behavior: 'smooth' });
        el.removeEventListener('wheel', scroll);
        setTimeout(self.setScroll, 700);
      }
    });
  }

  scrollButton() {
    if (this.cont.scrollTop > 20) {
      this.cont.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.setState({ topSlide: true });
    } else {
      this.cont.scrollTo({ top: this.cont.clientHeight, left: 0, behavior: 'smooth' });
      this.setState({ topSlide: false });
    }
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
        <PageDownButton top={!this.state.topSlide} onClick={this.scrollButton} />
      </HomePage>
    );
  }
}
