import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Actives from './Pages/Actives';
import Contacts from './Pages/Contacts';
import News from './Pages/News';
import Services from './Pages/Services';
import Stockholders from './Pages/Stockholders';
import NotFound from './Pages/NotFound';
import Structure from './Pages/About/Structure';
import Profile from './Pages/About/Profile';
import Lead from './Pages/About/Lead';
import History from './Pages/About/History';
import Geography from './Pages/About/Geography';
import NewsDetail from './Pages/News/NewsDetail';

const Content = styled.div`
  flex-grow: 1;
  background-color: rgba(0,0,0,0.4);
  overflow: auto;
`;

export default () => (
  <Content>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/about/structure" component={Structure} />
      <Route path="/about/profile" component={Profile} />
      <Route path="/about/lead" component={Lead} />
      <Route path="/about/history" component={History} />
      <Route path="/about/geography" component={Geography} />

      <Route path="/actives" component={Actives} />
      <Route path="/contacts" component={Contacts} />
      <Route exact path="/news" component={News} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/services" component={Services} />
      <Route path="/stockholders" component={Stockholders} />
      <Route path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  </Content>
);
