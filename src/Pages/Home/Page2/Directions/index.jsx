import React from 'react';
import content from './../content';
import { Button, Buttons, Descriptions, Directions, Text, Title } from './styled';
import { Ship1, Ship2, Ship3, Ship4 } from './icons';

const ships = [Ship1(), Ship2(), Ship3(), Ship4()];
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
    const { l } = this.props;
    const selectedItem = content[l].find(el => el.id === this.state.selectedId);
    return (
      <Directions>
        <Descriptions>
          <Title>{l === 'RU' ? 'Описание направления' : 'Direction description' }:</Title>
          <Text>{ selectedItem.description }</Text>
        </Descriptions>
        <Buttons>
          {content[l].map((el, i) =>
            (<Button
              selected={el.id === this.state.selectedId}
              onClick={() => this.handleClick(el.id)}
              key={el.id}
            >
              {ships[i]}
              {el.name}
            </Button>))}
        </Buttons>
      </Directions>
    );
  }
}
