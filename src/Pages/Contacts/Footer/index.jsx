import React from 'react';
import { Footer, LeftSide, RightSide, Text, Logo } from './styled';

import Spacecode from './../../../_assets/images/spacecode.png';

export default ({ l }) => (
  <Footer>
    <LeftSide> © 2017 Pola Group. {l === 'RU' ? 'Все права защищены' : 'All rights reserved'}. </LeftSide>
    <RightSide>
      <Text>{l === 'RU' ? 'Сайт разработан' : 'Designed by'}</Text>
      <a href="http://spacecode.ru/">
        <Logo src={Spacecode} />
      </a>
    </RightSide>
  </Footer>
);
