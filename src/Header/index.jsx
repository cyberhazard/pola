import React from 'react';
import styled from 'styled-components';

import Select from './../Components/Select';

const Header = styled.div`
  height: 66px;
  width: 100%;
  border: 1px solid black;
  flex-shrink: 0;
  background-color: rgba(0,0,0,0.8);
  padding-left: 80px;
`;

export default ({ language, changeLang }) => (
  <Header>
    <Select
      height="100%"
      width="126px"
      label={language === 'RU' ? '🇷🇺 RU' : '🇺🇸 EN'}
      values={[{ value: 'RU', name: '🇷🇺 RU' }, { value: 'EN', name: '🇺🇸 EN' }]}
      onChange={changeLang}
      backgroundColor="rgba(255,255,255,0.1)"
    />
  </Header>
);
