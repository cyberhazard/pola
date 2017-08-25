import React from 'react';
import styled from 'styled-components';
import { Page as OriginalPage } from './styled';
import Button from './../../Components/Button';
import PageDownButton from './../../Components/PageDownButton';
import Navigation from './../../Components/Navigation';

const Text = styled.div`
  width: 54.0372670807%;
  color: rgb(255, 255, 255);
  font-family: Lora;
  font-size: 4rem;
  font-weight: 700;
  line-height: 6.2rem;
  margin-bottom: 9.2929292929vh;
`;

const Slide = OriginalPage.extend`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  padding-left: 6.2111801242%;
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

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentOffset: 0 };

    this.slides = 4;
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.currentOffset >= 100 * (this.slides - 1)) return null;
    return this.setState(prev => ({ currentOffset: prev.currentOffset + 100 }));
  }

  prev() {
    if (this.state.currentOffset === 0) return null;
    return this.setState(prev => ({ currentOffset: prev.currentOffset - 100 }));
  }

  render() {
    return (
      <Content>
        <Slider>
          <View offset={this.state.currentOffset} >
            <Slide>
              <Text>
                Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                складская логистика
              </Text>
              <Button label="Подробнее" />
            </Slide>
            <Slide>
              <Text>
                Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                складская логистика
              </Text>
              <Button label="Подробнее" />
            </Slide>
            <Slide>
              <Text>
                Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                складская логистика
              </Text>
              <Button label="Подробнее" />
            </Slide>
            <Slide>
              <Text>
                Комплекс Стройопторг в Москве: контейнерный терминал, экспедирование,
                складская логистика
              </Text>
              <Button label="Подробнее" />
            </Slide>
          </View>
        </Slider>
        <PageDownButton />
        <Navigation next={this.next} prev={this.prev} abs />
      </Content>
    );
  }
}
