import React from 'react';
import news from './../../_fake_api/news.js';

export default ({ match }) => {
  const id = match.params.id;
  const data = news.find(n => n.id === id);
  return (
    <div>Title: {data.title}, ID: {data.id}</div>
  )
};
