import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import m from './../../media';

const Category = styled.div`
  width: 100%;
`;

const Label = styled.div`
  background-color: rgb(243, 243, 243);
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.6rem 5rem 1.8rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: .2s;
  ${({ isActive }) => isActive && 'color: white; background-color: rgb(8, 107, 181);'}
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 0.7rem);
    left: 3rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: rgb(7, 107, 181);
    ${({ isActive }) => isActive && 'background-color: white;'}
  }
`;

const Table = styled.div`
  background-color: rgb(249, 248, 248);
`;

const Cell = styled.div`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  flex-shrink: 0;
  flex-grow: 0;
  padding-left: 1rem;
  &:nth-child(1) {
    width: 45.7%;
    ${m.tablet`width: 35.7%;`}
  }
  &:nth-child(2) {
    width: 15.3%;
  }
  &:nth-child(3) {
    width: 24.4%;
  }
  &:last-child {
    width: 1%;
  }
`;

const Line = styled.div`
  padding: 2.4rem 2rem 1.5rem 3rem;
  display: flex;
  cursor: pointer;
  ${m.tablet`
    padding-left: 1.5rem;
  `}
  ${({ th }) => th && 'font-weight: 700; cursor: auto;'}
  ${({ isSelected }) => isSelected && `
    background-color: rgb(8, 107, 181);
    & div, span {
      color: white;
    }
  `}
`;

const Caret = styled(Icon)`
  color: rgb(8, 107, 181);
  font-size: 2rem;
  margin-right: 1rem;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(p => ({ isOpen: !p.isOpen }));
  }

  render() {
    return (
      <Category>
        <Label isActive={this.state.isOpen} onClick={this.toggleOpen}>{this.props.label}</Label>
        {
          this.state.isOpen &&
          <Table>
            <Line th>
              <Cell>Судно</Cell>
              <Cell>Год</Cell>
              <Cell>Дедвейт</Cell>
              <Cell>Флаг</Cell>
            </Line>
            {
              this.props.ships &&
              this.props.ships.map(ship => (
                <Line key={ship.id} onClick={() => this.props.selectID(ship.id)} isSelected={ship.id === this.props.selectedID}>
                  <Cell><Caret name="caret-right" />{ship.shipName}</Cell>
                  <Cell>{ship.year}</Cell>
                  <Cell>{ship.deadweight}</Cell>
                  <Cell>{ship.flag}</Cell>
                </Line>
              ))
            }
          </Table>
        }
      </Category>
    );
  }
}
