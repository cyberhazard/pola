import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import Button from './../../Components/Button';
import news from './../../_fake_api/news';
import PageTemplate from './../../Components/PageTemplate';
import HeaderText from './../../Components/HeaderText';
import Breadcrumbs from './../../Components/Breadcrumbs';
import { TimeStamp as TS } from './../../Components/NewsBlock';
import m from './../../media';

const TimeStamp = styled(TS)`
  &:before{
    top: 45%;
  }
`;

const Header = styled(HeaderText)`
  margin-top: 2.8rem;
  margin-bottom: 3.1rem;
`;

const HTML = styled.div`
  padding-top: 5.5rem;
  & p {
    color: rgb(0, 0, 0);
    font-family: Roboto;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3.4rem;
  }
  & .images {
    position: relative;
    margin: 3.3rem 0;
    & img {
      position: absolute;
      ${m.tablet`
        position: static;
        width: 100%;
      `}
    }
  }
`;

const Footer = styled.div`
  margin-top: 7rem;
  text-align: center;
`;

export default ({ match }) => {
  const id = match.params.id;
  const data = news.find(n => n.id === id);
  if (!data) return <Redirect to="/404" />;
  return (
    <PageTemplate full>
      <Breadcrumbs to="/news" label="Новости" current={data.title} />
      <Header>{data.title}</Header>
      <TimeStamp>{data.timestamp}</TimeStamp>
      <HTML dangerouslySetInnerHTML={{ __html: data.html }} />
      <Footer>
        <Link to="/news">
          <Button label="Все новости" />
        </Link>
      </Footer>
    </PageTemplate>
  );
};
