import React from 'react';
import content from './../content';
import { Button, Buttons, Descriptions, Directions, Text, Title } from './styled';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedId) {
    this.setState({ selectedId });
  }

  render() {
    const selectedItem = content.find(el => el.id === this.state.selectedId);
    return (
      <Directions>
        <Descriptions>
          <Title>Описание направления:</Title>
          <Text>{ selectedItem.description }</Text>
        </Descriptions>
        <Buttons>
          {content.map(el =>
            (<Button
              selected={el.id === this.state.selectedId}
              onClick={() => this.handleClick(el.id)}
              key={el.id}
            >{el.name}</Button>))}
        </Buttons>
      </Directions>
    );
  }
}
