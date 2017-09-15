import React from 'react';
import { Form, Input, TextArea, Element, SubTitle, Title } from './styled';
import Button from './../../../Components/Button';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <Form>
        <Title> Обратная связь </Title>
        <Element>
          <SubTitle>* Ваше имя:</SubTitle>
          <Input />
        </Element>
        <Element>
          <SubTitle>* Ваша эл. почта:</SubTitle>
          <Input />
        </Element>
        <Element>
          <SubTitle>* Ваше сообщение:</SubTitle>
          <TextArea />
        </Element>
        <Element>
          <Button label="Отправить" />
        </Element>
      </Form>
    );
  }
}
