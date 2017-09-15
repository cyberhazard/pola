import React from 'react';
import { Icon as Ficon } from 'react-fa';
import styled from 'styled-components';
import Person from './Person';
import persons from './data';
import m from './../../../../media';

const Slider = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 6rem;
`;

const Content = styled.div`
  width: 106.4rem;
  overflow: hidden;
  margin: 0 auto;
  ${m.tablet`
    width: 24rem;
  `}
`;

const MovingBlock = styled.div`
  display: flex;
  transition: .5s;
  ${p => p.offset && `transform: translateX(-${p.offset}rem);`}
`;

const Icon = styled(Ficon)`
  font-size: 3.3rem;
`;

const Button = styled.div`
  position: absolute;
  top: 22rem;
  right: 0;
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
  ${p => p.left && 'transform: rotate(180deg); left: 0; right: auto;'}
  &:hover {
    background-color: hsl(206, 93%, 47%);
  }
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentOffset: 0 };
    this.blockOffset = 27.6;
    this.slidesPerFrame = 5;
    if (window.innerWidth < 700) this.slidesPerFrame = 1;
    this.maxOffset = this.blockOffset * (persons.length - this.slidesPerFrame);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.currentOffset >= this.maxOffset) return null;
    return this.setState(p => ({ currentOffset: p.currentOffset + this.blockOffset }));
  }

  prev() {
    if (this.state.currentOffset <= 0) return this.setState({ currentOffset: 0 });
    return this.setState(p => ({ currentOffset: p.currentOffset - this.blockOffset }));
  }

  render() {
    return (
      <Slider>
        <Content>
          <MovingBlock offset={this.state.currentOffset}>
            {
              persons.map(p =>
                (<Person
                  key={p.id}
                  img={p.img}
                  title={p.title}
                  description={p.description}
                  position={p.position}
                />))
            }
          </MovingBlock>
        </Content>
        <Button onClick={this.prev} left><Icon name="angle-right" /></Button>
        <Button onClick={this.next} ><Icon name="angle-right" /></Button>
      </Slider>
    );
  }
}
