import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Actives from './Pages/Actives';
import Contacts from './Pages/Contacts';
import News from './Pages/News';
import Services from './Pages/Services';
import Stockholders from './Pages/Stockholders';
import NotFound from './Pages/NotFound';

const Content = styled.div`
  flex-grow: 1;
  background-color: rgba(0,0,0,0.4);
`;

export default () => (
  <Content>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/actives" component={Actives} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/news" component={News} />
      <Route path="/services" component={Services} />
      <Route path="/stockholders" component={Stockholders} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Content>
);
