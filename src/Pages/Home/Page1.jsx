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
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.2rem;
  margin-bottom: 9.2929292929vh;
  ${m.tablet`
    width: auto;
    font-size: 2rem;
    line-height: 4rem;
  `}
`;

const Title = styled.span`
  width: 64.0372670807%;
  display: inline-block;
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 2vh;
  text-decoration: underline;
  text-decoration-color: #0168B3;
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
  align-items: flex-start;
  padding-left: 6.2111801242%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
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
  will-change: transform;
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

    this.slides = 3; // КОЛИЧЕСТВО СЛАЙДОВ!!!
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
            <Slide bg={slide3}>
              <Wrapper>
                <Title>
                  Перевозка грузов морским флотом
                </Title>
                <Text>
                  Под управлением группы Pola находится 19 судов типа Handysize суммарным дедвейтом более 650тыс. тонн
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
            <Slide bg={slide2}>
              <Wrapper>
                <Title>
                  Речные круизы по внутренним водным путям РФ
                </Title>
                <Text>
                  Компания ВодоходЪ, входящая в группу оперирует крупнейшим круизным флотом в России.
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
            <Slide bg={slide1}>
              <Wrapper>
                <Title>
                  Выход на рынок Short Sea перевозок
                </Title>
                <Text>
                  Построение 9 судов RSD 59 и 1 RSD 49 для Short Sea перевозок с использованием внутренних водных путей РФ
                </Text>
                <Button label="Подробнее" />
              </Wrapper>
            </Slide>
          </View>
        </Slider>
        <Points>
          {
            Array.from({ length: this.slides }).map((e, i) => i * 100).map((el, i) =>
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
