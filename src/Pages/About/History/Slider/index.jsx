import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Icon as Ficon } from 'react-fa';
import Slide from './Slide';
import Point from './Point';
import data from './../data';
import m from './../../../../media';

const Slider = styled.div`
  width: 100%;
  ${m.tablet`
    display: flex;
    flex-direction: column;
  `}
`;

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 30.4rem;
  overflow: hidden;
  margin-bottom: 3rem;
  ${m.tablet`
    height: 90rem;
  `}
`;

const TimeLine = styled.div`
  position: relative;
  width: 100%;
  border-bottom: .2rem solid rgb(1, 104, 179);
  height: 5.9rem;
  margin-bottom: 2rem;
  z-index: 1;
  ${m.tablet`
    margin-bottom: 7rem;
  `}
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
  margin-top: 3rem;
  margin-bottom: 6rem;
  ${m.tablet`
    order: -1;
  `}
`;

const Counter = styled.div`
  width: 10rem;
  text-align: center;
`;

const CurrentSlide = styled.span`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 3.2rem;
  font-weight: 500;
`;

const AllSlides = styled.span`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 1rem;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.selectSlide = this.selectSlide.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  selectSlide(selectedIndex) {
    this.setState({ selectedIndex });
  }

  next() {
    if (this.state.selectedIndex === data.length - 1) return null;
    return this.setState(p => ({ selectedIndex: p.selectedIndex + 1 }));
  }

  prev() {
    if (this.state.selectedIndex === 0) return null;
    return this.setState(p => ({ selectedIndex: p.selectedIndex - 1 }));
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
          <Button left onClick={this.prev}><Icon name="angle-right" /></Button>
          <Counter>
            <CurrentSlide>{this.state.selectedIndex + 1} /</CurrentSlide>
            <AllSlides>{data.length}</AllSlides>
          </Counter>
          <Button onClick={this.next}><Icon name="angle-right" /></Button>
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
