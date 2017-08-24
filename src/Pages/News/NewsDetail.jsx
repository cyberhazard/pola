import React from 'react';
import news from './../../_fake_api/news';
import PageTemplate from './../../Components/PageTemplate';
import Header from './../../Components/HeaderText';

export default ({ match }) => {
  const id = match.params.id;
  const data = news.find(n => n.id === id);
  return (
    <PageTemplate> ID: {data.id}
      <Header>{data.title}</Header>
      ID: {data.id}
    </PageTemplate>
  );
};
