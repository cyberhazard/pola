import styled from 'styled-components';

export const Directions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4.6464646465%;
`;

export const Descriptions = styled.div`
  flex: 0 0 50%;
  border-right: .2rem solid rgb(1, 104, 179);
  padding-right: 10.3896103896%;
`;

export const Buttons = styled.div`
  flex: 0 0 50%;
`;

export const Title = styled.h3`
  color: black;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2.4rem;
`;

export const Text = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
`;

export const Button = styled.button`
  position: relative;
  box-shadow: .4rem .7rem 1.2rem rgba(0, 0, 0, 0.14);
  background-color: rgb(243, 243, 243);
  ${({ selected }) => selected && 'background-color: rgb(1, 104, 179);'}
  width: 75.4098360656%;
  color: black;
  ${({ selected }) => selected && 'color: rgb(255, 255, 255);'}
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  padding: 2.4rem 0;
  margin-left: 6.8rem;
  transition: .3s;
  cursor: pointer;
  margin-bottom: 3.2323232323vh;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - .1rem);
    right: 100%;
    width: 6.8rem;
    height: .2rem;
    background-color: transparent;
    ${({ selected }) => selected && 'background-color: rgb(1, 104, 179);'}
  }
  &:hover {
    color: white;
    background-color: rgb(1, 104, 179);
  }
`;
