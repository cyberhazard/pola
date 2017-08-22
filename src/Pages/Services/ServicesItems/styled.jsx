import styled from 'styled-components';


export const ServicesItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
`;
export const Items = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  flex: 0 0 30%;
  padding-right: 9.8rem;
  border-right: .2rem solid rgb(1,104,179);
`;
export const Item = styled.div`
  width:100%;
  position: relative;
  color: #000000;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 3.4rem;
  cursor: pointer;
  line-height: 2.8rem;
  transition:0.3s;
  padding-left:1.8rem;
  ${({ selected }) => selected && 'color: rgb(1, 104, 179);'}
  &:last-child{
    margin-bottom:0;
  }
  &:hover{
    color: rgb(1, 104, 179);
  }
  &:before{
    content '\f111';
    font-size: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'FontAwesome';
    ${({ selected }) => selected && 'content: \'\f0da\'; font-size: 2rem;'}
  }
  &:after{
    content: '';
    width: 6.8rem;
    height: .2rem;
    right: -9.8rem;
    top: 1.2rem;
    position: absolute;
    background-color: transparent;
    ${({ selected }) => selected && 'background-color: rgb(1, 104, 179);'}
  }

`;
export const Description = styled.div`
  displya: flex;
  justify-content: flex-start;
  align-items:flex-start;
  padding-left: 6.7rem;
`;
export const Img = styled.img`
  margin-bottom: 4.5rem;
`;
export const Title = styled.div`
  color: #000000;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom:2.2rem;
`;
export const Text = styled.div`
  color: #000000;
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.5rem;
`;

