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
    const { l } = this.props;
    return (
      <Form>
        <Title>{l === 'RU' ? 'Обратная связь' : 'Feedback'}  </Title>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваше имя' : 'Your name'}:</SubTitle>
          <Input />
        </Element>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваша эл. почта' : 'Your e-mail'}:</SubTitle>
          <Input />
        </Element>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваше сообщение' : 'Your message'}:</SubTitle>
          <TextArea />
        </Element>
        <Element>
          <Button label={l === 'RU' ? 'Отправить' : 'Send'} />
        </Element>
      </Form>
    );
  }
}
