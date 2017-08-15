/* eslint-disable no-return-assign */
import React from 'react';
import { Dropdown, Item, Label, Select, Wrapper } from './styled';

/**
 * props:
 * width - ширина
 * height - высота
 * label - Начальная подпись
 * values = массив значений
 * onChange - функция, которая возращает выбранное значение
 *
 * @export
 * @class
 * @extends {React.Component}
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleClick(e) {
    this.setState(p => ({ isOpen: !p.isOpen }));
    const { bottom, left } = e.target.getBoundingClientRect();
    this.dropdown.style.cssText = `top: ${bottom}px; left: ${left}px;`;
  }

  handleSelect(e, selectedValue) {
    e.stopPropagation();
    this.setState({ isOpen: false, selectedValue: selectedValue.name });
    // eslint-disable-next-line
    this.props.onChange && this.props.onChange(selectedValue.value);
  }

  render() {
    return (
      <Select
        width={this.props.width}
        height={this.props.height}
        onClick={this.handleClick}
        backgroundColor={this.props.backgroundColor}
      >
        <Label>
          { this.state.selectedValue || this.props.label }
        </Label>

        <Wrapper isOpen={this.state.isOpen}>
          <Dropdown innerRef={d => this.dropdown = d} width={this.props.width}>
            {
              this.props.values && this.props.values.map((value, index) =>
                // eslint-disable-next-line
                    <Item key={index} onClick={e => this.handleSelect(e, value)}>{value.name}</Item>)
            }
          </Dropdown>
        </Wrapper>
      </Select>
    );
  }
}
