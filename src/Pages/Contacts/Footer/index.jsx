import React from 'react';
import { Footer, LeftSide, RightSide, Text, Logo } from './styled';

import Spacecode from './../../../_assets/images/spacecode.png';

export default () => (
  <Footer>
    <LeftSide> © 2017 Pola Group. Все права защищены. </LeftSide>
    <RightSide>
      <Text>Сайт разработан</Text>
      <a href="http://spacecode.ru/">
        <Logo src={Spacecode} />
      </a>
    </RightSide>
  </Footer>
);
