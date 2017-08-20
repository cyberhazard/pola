import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import content from './../content';
import { Content, Target, Item, Email, City } from './styled';

export const Angle = styled(Icon)`
  margin: 0 1.1rem;
  font-size:14px;
`;

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
              <City>  {el.city} </City>
              <Item> <Angle name="map-marker" /> {el.address} </Item>
              <Item> <Angle name="phone" /> {el.phone} </Item>
              <Email> <Angle name="envelope" /> {el.email} </Email>
            </Content>
          ))
        }
      </Target>
    );
  }
}
