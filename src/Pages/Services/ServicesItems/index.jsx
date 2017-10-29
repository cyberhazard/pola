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
    const { l } = this.props;
    const selectedItem = content[l].find(el => el.id === this.state.selectedId);
    return (
      <ServicesItems>
        <Items>
          { content[l].map(el =>
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
          <Title>{l === 'RU' ? 'Описание услуги' : 'Description'}:</Title>
          <Text dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
        </Description>
      </ServicesItems>
    );
  }
}
