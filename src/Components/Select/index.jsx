/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';

const Select = styled.div`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  border: 1px solid red;
  position: relative;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  position: relative;
  user-select: none;
  cursor: pointer;
  &:after {
    content: '\f107';
    font-family: 'FontAwesome';
    position: absolute;
    left: calc(100% - 24px);
    top: calc(50% - 8px);
    margin-left: 4px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  ${({ width }) => width && `width: ${width};`}
  top: 0;
  left: 0;
`;

const Item = styled.div`
  padding: 6px 20px;
  width: 100%;
  border: 1px solid green;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: none;
  ${({ isOpen }) => isOpen && 'display: block;'}
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

/**
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
    this.setState({ isOpen: false, selectedValue });
    // eslint-disable-next-line
    this.props.onChange && this.props.onChange(selectedValue);
  }

  render() {
    return (
      <Select
        width={this.props.width}
        height={this.props.height}
        onClick={this.handleClick}
      >
        <Label>
          { this.state.selectedValue || this.props.label }
        </Label>

        <Wrapper isOpen={this.state.isOpen}>
          <Dropdown innerRef={d => this.dropdown = d} width={this.props.width}>
            {
              this.props.values && this.props.values.map((value, index) =>
                // eslint-disable-next-line
                    <Item key={index} onClick={e => this.handleSelect(e, value)}>{value}</Item>)
            }
          </Dropdown>
        </Wrapper>
      </Select>
    );
  }
}
