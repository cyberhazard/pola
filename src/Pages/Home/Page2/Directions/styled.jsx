import styled from 'styled-components';

export const Directions = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4.6464646465%;
`;

export const Descriptions = styled.div`
  flex: 0 0 50%;
  border-right: 2px solid rgb(1, 104, 179);
  padding-right: 10.3896103896%;
`;

export const Buttons = styled.div`
  flex: 0 0 50%;
`;

export const Title = styled.h3`
  color: black;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  color: black;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;

export const Button = styled.button`
  position: relative;
  box-shadow: 4px 7px 12px rgba(0, 0, 0, 0.14);
  background-color: rgb(243, 243, 243);
  ${({ selected }) => selected && 'background-color: rgb(1, 104, 179);'}
  width: 75.4098360656%;
  color: black;
  ${({ selected }) => selected && 'color: rgb(255, 255, 255);'}
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  border: none;
  padding: 24px 0;
  margin-left: 68px;
  transition: .3s;
  cursor: pointer;
  margin-bottom: 3.2323232323vh;
  &:last-child {
    margin-bottom: 0;
  }
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 100%;
    width: 68px;
    height: 2px;
    background-color: transparent;
    ${({ selected }) => selected && 'background-color: rgb(1, 104, 179);'}
  }
  &:hover {
    color: white;
    background-color: rgb(1, 104, 179);
  }
`;
