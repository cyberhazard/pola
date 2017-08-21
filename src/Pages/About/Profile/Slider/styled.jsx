import styled from 'styled-components';

export const Slider = styled.div`
  width: 100%;
  height: 50rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 39rem;
  overflow: hidden;
  margin-bottom: 1.3rem;
  position: relative;
`;

export const BigImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.img`
  width: 23.6714975845%;
  max-height: 9.2rem;
  cursor: pointer;
  border: 2px solid transparent;
  ${p => p.isSelected && 'border-color: red;'}
`;
