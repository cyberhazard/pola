import React from 'react';
import { Form, Input, TextArea, Element, SubTitle, Title } from './styled';
import Button from './../../../Components/Button';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.send = this.send.bind(this);
  }
  send(e) {
    this.state = this.state;
    e.preventDefault();
    const { name: { value: name }, email: { value: email }, text: { value: text } } = e.currentTarget.elements;
    fetch('/mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `name=${name}&email=${email}&text=${text}`,
    }).then(() => (window.alertify.success('Ваша заявка отправленна')));
    e.currentTarget.reset();
  }
  render() {
    const { l } = this.props;
    return (
      <Form onSubmit={this.send}>
        <Title>{l === 'RU' ? 'Обратная связь' : 'Feedback'}  </Title>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваше имя' : 'Your name'}:</SubTitle>
          <Input required name="name" type="text" />
        </Element>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваша эл. почта' : 'Your e-mail'}:</SubTitle>
          <Input required name="email" type="email" />
        </Element>
        <Element>
          <SubTitle>* {l === 'RU' ? 'Ваше сообщение' : 'Your message'}:</SubTitle>
          <TextArea required name="text" type="text" />
        </Element>
        <Element>
          <Button type="submit" label={l === 'RU' ? 'Отправить' : 'Send'} />
        </Element>
      </Form>
    );
  }
}
