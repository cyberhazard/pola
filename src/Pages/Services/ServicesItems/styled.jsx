import styled from 'styled-components';
import m from './../../../media';

export const ServicesItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
  ${m.tablet`
    display: block;
  `}
`;

export const Items = styled.div`
  display: flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:flex-start;
  flex: 0 0 30%;
  padding-right: 9.8rem;
  border-right: .2rem solid rgb(1,104,179);
  ${m.tablet`
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      right: -2px;
      width: 50%;
      border-top: 1px solid #0168B3;
      border-left: 1px solid #0168B3;
      height: 5rem;
    }
    &:before {
      content: '';
      position: absolute;
      top: calc(100% + 5rem);
      right: calc(50% - 6px);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 4px 0 5px;
      border-color: #0168B3 transparent transparent transparent;
    }
  `}
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
    ${m.tablet`
      margin-bottom: 3.4rem;
    `}
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
  ${m.tablet`
    padding-left: 0;
    margin-top: 8rem;
  `}
`;

export const Img = styled.img`
  margin-bottom: 4.5rem;
  ${m.tablet`
    width: 100%;
  `}
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

