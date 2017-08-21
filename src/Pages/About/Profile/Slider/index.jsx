import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ship1 from './../../../../_assets/images/profile/ship1.png';
import ship2 from './../../../../_assets/images/profile/ship2.png';
import ship3 from './../../../../_assets/images/profile/ship3.png';

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
`;

const BigImage = styled.img`
  width: 100%;
  max-height: 39rem;
  margin-bottom: 1.3rem;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.img`
  width: 23.6714975845%;
  max-height: 9.2rem;
  cursor: pointer;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedImageId: 0 };
    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(selectedImageId) {
    this.setState({ selectedImageId });
  }

  render() {
    const selectedImage = data.find(el => el.id === this.state.selectedImageId);
    return (
      <Slider>
        <TransitionGroup>
          <CSSTransition classNames="slider" timeout={500}>
            <BigImage src={selectedImage.big} />
          </CSSTransition>
        </TransitionGroup>
        <Images>
          {
            data.map(img =>
              (<Item
                key={img.id}
                src={img.preview}
                onClick={() => this.selectImage(img.id)}
              />))
          }
        </Images>
      </Slider>
    );
  }
};

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
