import React from 'react';
import styled from 'styled-components';
import { Icon as Ficon } from 'react-fa';

const Block = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5rem;
`;

const Img = styled.img`
  max-width: 38rem;
  order: 1;
  margin-right: 3.8rem;
  ${p => p.right && `
    order: 2;
    margin-right: 0;
    margin-left: 3.8rem;
  `}
`;

const Content = styled.div`
  order: 2;
  flex-grow: 1;
  ${p => p.right && 'order: 1;'}
`;

const Text = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.4rem;
`;

const Header = styled.h3`
  display: inline-block;
  height: 2.7rem;
  color: rgb(0, 0, 0);
  font-family: Lora;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3.1rem;
`;

const Link = styled.a`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 5.6rem;
  text-decoration: underline;
  margin-left: 6rem;
`;

const Icon = styled(Ficon)`
  margin-right: 1.1rem;
`;

export default ({ children, img, header, right, link }) => (
  <Block>
    <Img src={img} right={right} />
    <Content right={right} >
      <Header>{header}</Header>
      <Link href={link} target="_blank"><Icon name="external-link" />Перейти на сайт компании</Link>
      <Text>{children}</Text>
    </Content>
  </Block>
);