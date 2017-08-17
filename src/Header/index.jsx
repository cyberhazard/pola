import React from 'react';
import { Header, Icon, Wrapper, Contact } from './styled';

import Select from './../Components/Select';
import flagRU from './../_assets/images/flag-ru.jpg';
import flagEN from './../_assets/images/flag-en.jpg';
import mapPin from './../_assets/images/map-pin.png';
import iconPhone from './../_assets/images/icon-phone.png';
import mapFlag from './../_assets/images/map-flag.png';
import locations from './../locations';

const country = (lang, img) => (
  <Wrapper>
    <Icon src={img} />{lang}
  </Wrapper>
);

const getAddresses = (loc, lang) => {
  const values = Object.keys(loc);
  return values.reduce((o, val) => [...o, { value: val, name: loc[val][lang].title }], []);
};

export default ({ language, changeLang, changeLocation, location }) => (
  <Header>
    <Select
      height="100%"
      width="126px"
      label={language === 'RU' ? country('RU', flagRU) : country('EN', flagEN)}
      values={[{ value: 'RU', name: country('RU', flagRU) }, { value: 'EN', name: country('EN', flagEN) }]}
      onChange={changeLang}
      backgroundColor="rgba(255,255,255,0.1)"
    />
    <Contact>
      <Icon src={mapPin} /> {locations[location][language].address}
    </Contact>
    <Contact>
      <Icon src={iconPhone} /> {locations[location][language].phone}
    </Contact>
    <Select
      left
      height="100%"
      width="228px"
      onChange={changeLocation}
      backgroundColor="#0168b3"
      label={locations[location][language].title}
      values={getAddresses(locations, language)}
      icon={mapFlag}
      iconStyle="height: 17px; margin-right: 12px;"
    />
  </Header>
);
