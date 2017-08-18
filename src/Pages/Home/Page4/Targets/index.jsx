import React from 'react';
import content from './../content';
import { Content, Target, Item, Email, City } from './styled';

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
    return (
      <Target>
        {
          content.map(el => (
            <Content
              selected={el.id === this.state.selectedId}
              onClick={() => this.handleClick(el.id)}
              key={el.id}
            >
              <City> {el.city} </City>
              <Item> {el.adres} </Item>
              <Item> {el.phone} </Item>
              <Email> {el.email} </Email>
            </Content>
          ))
        }
      </Target>
    );
  }
}
