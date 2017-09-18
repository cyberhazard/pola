import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Icon } from 'react-fa';
// import content from './../content';
import { Content, Target, Item, Email, City } from './styled';
import locations from './../../../../locations';

export const Angle = styled(Icon)`
  margin: 0 1.1rem;
  font-size:1.4rem;
`;

class TargetClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedId: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(selectedId, coords) {
    this.setState({ selectedId });
    this.props.changetCoord(coords);
  }
  render() {
    const content = Object.keys(locations).map(loc => locations[loc][this.props.language]);
    return (
      <Target>
        {
          content.map(el => (
            <Content
              selected={el.title === this.state.selectedId}
              onClick={() => this.handleClick(el.title, el.coords)}
              key={el.title}
            >
              <City>  {el.title} </City>
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

export default connect(
  state => ({
    language: state.language,
  }),
)(TargetClass);
