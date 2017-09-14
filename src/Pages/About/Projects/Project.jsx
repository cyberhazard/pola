import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import projects from './../../../_fake_api/projects';
import Numbers from './Numbers';
import Button from './../../../Components/Button';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../../_assets/images/structure/bg.png')}') top right no-repeat;
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

const Content = styled.div`

`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #E5E5E5;
`;

const Image = styled.img`
  width: 36.5%;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Promo = styled.div`
  padding-left: 4.8rem;
  width: 63.5%;
`;

const Title = styled.h3`
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
`;

const Description = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3.4rem;
  border-bottom: 1px solid #E5E5E5;
  padding-bottom: 1.8rem;
`;

const Nums = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled.p`
  padding-top: 2rem;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.4rem;
`;

const Footer = styled.div`
  padding-top: 4.5rem;
  display: flex;
  justify-content: space-between;
`;

const Downloads = styled.div`
  display: flex;
`;

const Download = styled.a`
  display: flex;
  align-items: center;
  margin-right: 12rem;
  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.span`
  color: #0068B4;
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 1px dotted #0068B4;
  margin-left: 2rem;
`;

export default ({ match }) => {
  const { id } = match.params;
  const data = projects.find(el => el.name === id);
  return (
    <Page>
      <Breadcrumbs to="/about" label="О группе" to2="/about/projects" label2="Проекты" current={id} />
      <Header>{id}</Header>
      <Content>
        <Top>
          <Image src={data.photo} />
          <Promo>
            <Title>{data.title}</Title>
            <Description>{data.top}</Description>
            <Nums>
              {
                data.numbers.map(n => <Numbers number={n.number} text1={n.text1} text2={n.text2} key={Math.random()} />)
              }
            </Nums>
          </Promo>
        </Top>
        <Text>
          {data.text}
        </Text>
      </Content>
      <Footer>
        <Link to="/about/projects"><Button label="Назад проектам" /></Link>
        <Downloads>
          <Download href="/readme.pdf" download>
            <img src={require('./../../../_assets/images/icon-pdf.png')} alt="" />
            <Label>Презентация <Icon name="angle-right" /></Label>
          </Download>
          <Download href="/readme.doc" download>
            <img src={require('./../../../_assets/images/icon-document.png')} alt="" />
            <Label>Документы <Icon name="angle-right" /></Label>
          </Download>
        </Downloads>
      </Footer>
    </Page>
  );
};
