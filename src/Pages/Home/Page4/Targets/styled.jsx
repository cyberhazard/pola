import styled from 'styled-components';

export const Target = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  height:100%;
`;

export const Content = styled.div`
  width: 300px;
  height: 193px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid white;
  ${({ selected }) => selected && 'border: 2px solid white;'}
  ${({ selected }) => selected && 'color: black;'}
  ${({ selected }) => selected && 'background: white;'}

`;
export const City = styled.div`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  position:relative;
  margin-bottom: 36px;
  width: 100%;
  text-align:center;
  &:after{
    content: '';
    position: absolute;
    bottom: -14px;
    left: 44%;
    width: 36px;
    border-bottom: 2px solid #0168b3;
  }
`;
export const Item = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-bottom:16px;
`;
export const Email = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
`;
