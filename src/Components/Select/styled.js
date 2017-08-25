import styled from 'styled-components';

export const Select = styled.div`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  position: relative;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  ${({ left }) => left && 'justify-content: flex-start;'}
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.6rem;
  &:after {
    content: '\f107';
    font-family: 'FontAwesome';
    position: absolute;
    left: calc(100% - 2.4rem);
    top: calc(50% - .8rem);
    margin-left: .4rem;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  ${({ width }) => width && `width: ${width};`}
  top: 0;
  left: 0;
`;

export const Item = styled.div`
  padding: .6rem 2rem;
  width: 100%;
  background-color: rgba(0,0,0,1);
  text-align: center;
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.6rem;
  cursor: pointer;
  transition: .3s;
  &:hover {
    background-color: rgba(0,0,0,1);
    color: #0397d6;
  }
`;

export const Wrapper = styled.div`
  opacity: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 150%;
  transition: opacity .5s;
  ${({ isOpen }) => isOpen && 'left: 0; opacity: 1;'}
  z-index: 100;
`;

export const Icon = styled.img`
  ${p => p.customStyle && p.customStyle}
`;
