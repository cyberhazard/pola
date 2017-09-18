import React from 'react';
import styled from 'styled-components';
import { Page as OriginalPage } from './styled';
import Button from './../../Components/Button';
import Navigation from './../../Components/Navigation';
import Circle from './Circle';
import m from './../../media';

import slide1 from './../../_assets/images/home-slide-1.jpg';
import slide2 from './../../_assets/images/home-slide-2.jpg';
import slide3 from './../../_assets/images/home-slide-3.jpg';

const Text = styled.div`
  width: 54.0372670807%;
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 4rem;
  font-weight: 700;
  line-height: 6.2rem;
  margin-bottom: 9.2929292929vh;
  ${m.tablet`
    width: auto;
    font-size: 3rem;
    line-height: 4rem;
  `}
`;

const Slide = OriginalPage.extend`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  ${({ bg }) => bg && `background-image: url('${bg}') ;`}
`;

const Wrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  padding-left: 6.2111801242%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const Slider = styled.div`
  overflow-x: hidden;
`;

const Content = styled.div`
  position: relative;
`;

const View = styled.div`
  position: relative;
  display: flex;
  transition: 1s;
  ${({ offset }) => offset && `transform: translateX(-${offset}%);`}
`;

const Points = styled.div`
  display: flex;
  position: absolute;
  top: 9rem;
  left: 10rem;
  ${m.tablet`
    top: 3rem;
    left: 2rem;
  `}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentOffset: 0 };

    this.slides = 4;
    this.breaks = [0, 100, 200, 300];
    this.timer = 0;
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.slideTo = this.slideTo.bind(this);
    this.timerSlide = this.timerSlide.bind(this);
  }

  componentDidMount() {
    this.timerSlide();
  }

  timerSlide() {
    clearInterval(this.timer);
    this.timer = setTimeout(this.next, 8000);
  }


  next() {
    this.timerSlide();
    if (this.state.currentOffset >= 100 * (this.slides - 1)) {
      return this.setState({ currentOffset: 0 });
    }
    return this.setState(prev => ({ currentOffset: prev.currentOffset + 100 }));
  }

  prev() {
    this.timerSlide();
    if (this.state.currentOffset === 0) {
      return this.setState({ currentOffset: 100 * (this.slides - 1) });
    }
    return this.setState(prev => ({ currentOffset: prev.currentOffset - 100 }));
  }

  slideTo(currentOffset) {
    this.timerSlide();
    this.setState({ currentOffset });
  }

  render() {
    return (
      <Content>
        <Slider>
          <View offset={this.state.currentOffset} >
            <Slide bg={slide1}>
              <Wrapper>
                <Text>
                  Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                  складская логистика
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
            <Slide bg={slide2}>
              <Wrapper>
                <Text>
                  Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                  складская логистика
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
            <Slide bg={slide3}>
              <Wrapper>
                <Text>
                  Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                  складская логистика
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
            <Slide>
              <Wrapper>
                <Text>
                  Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                  складская логистика
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
          </View>
        </Slider>
        <Points>
          {
            this.breaks.map((el, i) =>
              (<Circle
                key={el}
                number={i + 1}
                isActive={this.state.currentOffset === el}
                onClick={() => this.slideTo(el)}
              />),
            )
          }
        </Points>
        <Navigation next={this.next} prev={this.prev} abs />
      </Content>
    );
  }
}
