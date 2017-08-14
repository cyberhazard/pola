import styled from 'styled-components';

export const Select = styled.div`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  border: 1px solid red;
  position: relative;
`;

export const Label = styled.div`
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

export const Dropdown = styled.div`
  position: absolute;
  ${({ width }) => width && `width: ${width};`}
  top: 0;
  left: 0;
`;

export const Item = styled.div`
  padding: 6px 20px;
  width: 100%;
  border: 1px solid green;
  cursor: pointer;
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
`;
