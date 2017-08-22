import React from 'react';
import content from './../content';
import { ServicesItems, Items, Description, Item, Img, Text, Title } from './styled';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(selectedId) {
    this.setState({ selectedId });
  }
  render() {
    const selectedItem = content.find(el => el.id === this.state.selectedId);
    return (
      <ServicesItems>
        <Items>
          { content.map(el =>
            (<Item
              selected={el.id === this.state.selectedId}
              onClick={() => this.handleClick(el.id)}
              key={el.id}
            > {el.name} </Item>),
          )
          }
        </Items>
        <Description>
          <Img src={selectedItem.image} />
          <Title>Описание услуги:</Title>
          <Text>{selectedItem.description}</Text>
        </Description>
      </ServicesItems>
    );
  }
}
