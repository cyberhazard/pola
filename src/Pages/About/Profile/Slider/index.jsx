import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ship1 from './../../../../_assets/images/structure/ship1.png';
import ship2 from './../../../../_assets/images/structure/ship2.png';
import ship3 from './../../../../_assets/images/structure/ship3.png';

const data = [
  {
    id: 0,
    preview: ship1,
    big: ship1,
  },
  {
    id: 1,
    preview: ship2,
    big: ship2,
  },
  {
    id: 2,
    preview: ship3,
    big: ship3,
  },
  {
    id: 3,
    preview: ship2,
    big: ship2,
  },
];

const Slider = styled.div`
  width: 100%;
  height: 50rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 39rem;
  overflow: hidden;
  margin-bottom: 1.3rem;
  position: relative;
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.img`
  width: 23.6714975845%;
  max-height: 9.2rem;
  cursor: pointer;
  border: 2px solid transparent;
  ${p => p.isSelected && 'border-color: red;'}
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageId: 0 };
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(selectedImageId) {
    this.setState({ selectedImageId, in: true });
  }

  render() {
    return (
      <Slider>
        <Wrapper>
          <TransitionGroup>
            {
              data.filter(el => el.id === this.state.selectedImageId).map(el => (
                <CSSTransition key={el.id} classNames="slider" timeout={500}>
                  <BigImage src={el.big} />
                </CSSTransition>
              ))
            }
          </TransitionGroup>
        </Wrapper>
        <Images>
          {
            data.map(img =>
              (<Item
                isSelected={img.id === this.state.selectedImageId}
                key={img.id}
                src={img.preview}
                onClick={() => this.selectImage(img.id)}
              />))
          }
        </Images>
      </Slider>
    );
  }
}

// eslint-disable-next-line
injectGlobal`
  .slider-enter {
    opacity: 0;
  }
  .slider-enter-active {
    transition: .5s;
    opacity: 1;
  }
  .slider-exit {
    opacity: 1;
  }
  .slider-exit-active {
    transition: .5s;
    opacity: 0;
  }
`;
