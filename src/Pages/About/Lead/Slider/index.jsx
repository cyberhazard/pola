import React from 'react';
import styled from 'styled-components';
import Person from './Person';
import persons from './data';

const Slider = styled.div`
  width: 100%;
  position: relative;
`;

const Paginations = styled.div`

`;

const Content = styled.div`
  width: 106.4rem;
  overflow: hidden;
  margin: 0 auto;
`;

const MovingBlock = styled.div`
  display: flex;
  transition: .5s;
  ${p => p.offset && `transform: translateX(-${p.offset}rem);`}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentOffset: 0 };
    this.blockOffset = 27.6;
    this.maxOffset = this.blockOffset * (persons.length - 1);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    if (this.state.currentOffset >= this.maxOffset) return null;
    this.setState(p => ({ currentOffset: p.currentOffset + this.blockOffset }));
  }

  prev() {
    if (this.state.currentOffset === 0) return null;
    this.setState(p => ({ currentOffset: p.currentOffset - this.blockOffset }));
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
        <Paginations />
      </Slider>
    );
  }
}
