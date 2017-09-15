import styled from 'styled-components';

export const Input = styled.input`
  background-color: #012138;
  border:none;
  padding: 1.6rem;
  color: white;
  font-size: 1.6rem;
  width:100%;
`;

export const TextArea = styled.textarea`
  resize:none;
  background-color: #012138;
  border: none;
  padding: 1.6rem;
  color:white;
  font-size: 1.6rem;
  width:100%;
  height:18rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width:100%;
`;

export const Element = styled.div`
  margin-bottom: 3.6rem;
  width:100%;
  &:last-child{
    text-align:end;
  }
`;

export const Title = styled.div`
color: #ffffff;
font-family: Roboto;
font-size: 2.8rem;
font-weight: 700;
margin-bottom: 4rem;
`;

export const SubTitle = styled.div`
  color: #ffffff;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom:1.6rem;
`;
