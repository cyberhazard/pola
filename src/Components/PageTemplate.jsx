import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 93.3333333333vh;
  ${({ full }) => full && `
    height: auto;
    min-height: 93.3333333333vh;
  `}
  width: 100%;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background-color: white;
`;
