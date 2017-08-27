import styled from 'styled-components';

export const Target = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-between;
  height:100%;
`;

export const Content = styled.div`
  width: 30rem;
  height: 19.3rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  cursor:pointer;
  border: .2rem solid white;
  margin-bottom: 2rem;
  ${({ selected }) => selected && 'border: .2rem solid white;'}
  ${({ selected }) => selected && 'color: black;'}
  ${({ selected }) => selected && 'background: white;'}
  &:last-child {
    margin-bottom: 0;
  }
`;
export const City = styled.div`
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 700;
  position:relative;
  margin-bottom: 3.6rem;
  width: 100%;
  text-align:center;
  &:after{
    content: '';
    position: absolute;
    bottom: -1.4rem;
    left: 44%;
    width: 3.6rem;
    border-bottom: .2rem solid #0168b3;
  }
`;
export const Item = styled.div`
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom:1.6rem;
  margin-left: 2.8rem;
`;
export const Email = styled.div`
  font-family: Roboto;
  font-size: 1.4rem;
  font-weight: 500;
  margin-left: 2.8rem;
  text-decoration: underline;
`;

