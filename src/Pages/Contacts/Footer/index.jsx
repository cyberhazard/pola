import React from 'react';
import { Footer, LeftSide } from './styled';

export default ({ l }) => (
  <Footer>
    <LeftSide> © 2017 Pola Group. {l === 'RU' ? 'Все права защищены' : 'All rights reserved'}. </LeftSide>
  </Footer>
);
