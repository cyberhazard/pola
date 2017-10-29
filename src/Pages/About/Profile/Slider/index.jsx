import React from 'react';
import { injectGlobal } from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BigImage, Images, Item, Slider, Wrapper } from './styled';
import data from './data';

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
