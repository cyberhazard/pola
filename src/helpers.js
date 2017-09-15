import { Component } from 'react';
import { withRouter } from 'react-router-dom';

export const generateID = () => `${Math.round(Math.random() * 10000000)}${Date.now()}`;

export const DELETE_ME = 10;

class Scroll extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      try {
        document.querySelector('.content').scrollTop = 0;
      } catch (e) { console.log(e); }
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(Scroll);
