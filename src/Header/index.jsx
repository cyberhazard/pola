import React from 'react';
import styled from 'styled-components';

import Select from './../Components/Select';
import flagRU from './../_assets/images/flag-ru.jpg';
import flagEN from './../_assets/images/flag-en.jpg';


const Icon = styled.img`
  height: 14px;
  margin-right: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const country = (lang, img) => (
  <Wrapper>
    <Icon src={img} />{lang}
  </Wrapper>
);

const Header = styled.div`
  height: 6.6666666667vh;
  width: 100%;
  border: 1px solid #44484c;
  flex-shrink: 0;
  background-color: rgba(0,0,0,0.8);
  padding-left: 80px;
`;

export default ({ language, changeLang }) => (
  <Header>
    <Select
      height="100%"
      width="126px"
      label={language === 'RU' ? country('RU', flagRU) : country('EN', flagEN)}
      values={[{ value: 'RU', name: country('RU', flagRU) }, { value: 'EN', name: country('EN', flagEN) }]}
      onChange={changeLang}
      backgroundColor="rgba(255,255,255,0.1)"
    />
  </Header>
);
