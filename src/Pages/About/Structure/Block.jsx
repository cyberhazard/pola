import React from 'react';
import styled from 'styled-components';
import { Icon as Ficon } from 'react-fa';
import { Link as RouterLink } from 'react-router-dom';
import Button from './../../../Components/Button';
import m from './../../../media';

const Block = styled.div`
  display: flex;
  align-items: center;
  ${({ top }) => top && 'align-items: flex-start;'}
  width: 100%;
  margin-bottom: 5rem;
  ${m.tablet`
    display: block;
  `}
`;

const Img = styled.img`
  max-width: 38rem;
  order: 1;
  margin-right: 3.8rem;
  ${m.tablet`
    margin-bottom: 2rem;
  `}
  ${p => p.right && `
    order: 2;
    margin-right: 0;
    margin-left: 3.8rem;
  `}
  ${m.tablet`
    margin-left: 0;
    margin-right: 0;
    width: 100%;
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
  ${m.tablet`
    margin-bottom: 1rem;
  `}
`;

const Link = styled.a`
  color: rgb(1, 104, 179);
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 5.6rem;
  text-decoration: underline;
  margin-left: 6rem;
  ${m.tablet`
    margin-left: 0;
    display: block;
  `}
`;

const Icon = styled(Ficon)`
  margin-right: 1.1rem;
`;

const RLink = styled(RouterLink)`
  display: block;
  margin-top: 3rem;
`;

export default ({ children, img, header, right, link, more, top, l }) => (
  <Block top={top}>
    <Img src={img} right={right} />
    <Content right={right} >
      <Header>{header}</Header>
      {
        link &&
        <Link href={link} target="_blank"><Icon name="external-link" />{l === 'RU' ? 'Перейти на сайт компании' : 'Go to website'}</Link>
      }
      <Text>{children}</Text>
      {
        more &&
        <RLink to={`/about/projects/${more}/`}>
          <Button label={l === 'RU' ? 'Подробнее' : 'More'} />
        </RLink>
      }
    </Content>
  </Block>
);
