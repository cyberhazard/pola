import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Icon as Ficon } from 'react-fa';
import Slide from './Slide';
import Point from './Point';
import data from './../data';

const Slider = styled.div`
  width: 100%;
`;

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 30.4rem;
  overflow: hidden;
  margin-bottom: 3rem;
`;

const TimeLine = styled.div`
  position: relative;
  width: 100%;
  border-bottom: .2rem solid rgb(1, 104, 179);
  height: 5.9rem;
  margin-bottom: 2rem;
  z-index: 1;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 4.3rem;
  height: 4.3rem;
  box-shadow: 0 0.8rem 1.8rem rgba(0, 0, 0, 0.12);
  background-color: rgb(7, 107, 181);
  transition: .3s;
  cursor: pointer;
  ${p => p.left && 'transform: rotate(180deg);'}
  &:hover {
    background-color: hsl(206, 93%, 47%);
  }
`;

const Icon = styled(Ficon)`
font-size: 3.3rem;
`;


const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.selectSlide = this.selectSlide.bind(this);
  }

  selectSlide(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <Slider>
        <Slides>
          <TransitionGroup>
            {
              data.filter((el, i) => i === this.state.selectedIndex).map(el =>
                (<CSSTransition key={el.id} classNames="history" timeout={500}>
                  <Slide img={el.img} title={el.title} text={el.text} />
                </CSSTransition>),
              )
            }
          </TransitionGroup>
        </Slides>
        <TimeLine>
          {
            data.map((el, i) =>
              (<Point
                isSelected={i === this.state.selectedIndex}
                key={el.id}
                text={el.year}
                offset={el.offset}
                onClick={() => this.selectSlide(i)}
              />))
          }
        </TimeLine>
        <Buttons>
          <Button left><Icon name="angle-right" /></Button>
          <Button><Icon name="angle-right" /></Button>
        </Buttons>
      </Slider>
    );
  }
}

// eslint-disable-next-line
injectGlobal`
  .history-enter {
    opacity: 0;
  }
  .history-enter-active {
    opacity: 1;
    transition: .5s;
  }
  .history-exit {
    opacity: 1;
  }
  .history-exit-active {
    opacity: 0;
    transition: .5s;
  }
`;
