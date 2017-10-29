import React from 'react';
import { Header, Icon, Wrapper, Contact, Cover } from './styled';
import Search from './Search';

import Select from './../Components/Select';
import flagRU from './../_assets/images/flag-ru.jpg';
import flagEN from './../_assets/images/flag-en.jpg';
import mapPin from './../_assets/images/map-pin.png';
import iconPhone from './../_assets/images/icon-phone.png';
import mapFlag from './../_assets/images/map-flag.png';
import locations from './../locations';

export const country = (lang, img) => (
  <Wrapper>
    <Icon src={img} />{lang}
  </Wrapper>
);

export const getAddresses = (loc, lang) => {
  const values = Object.keys(loc);
  return values.reduce((o, val) => [...o, { value: val, name: loc[val][lang].title }], []);
};

// eslint-disable-next-line
export default ({ language, changeLang, changeLocation, location }) => (
  <Cover>
    <Header>
      <Select
        height="100%"
        width="12.6rem"
        label={language === 'RU' ? country('RU', flagRU) : country('EN', flagEN)}
        values={[{ value: 'RU', name: country('RU', flagRU) }, { value: 'EN', name: country('EN', flagEN) }]}
        onChange={changeLang}
        backgroundColor="rgba(255,255,255,0.1)"
      />
      <Search />
      <Contact>
        <Icon src={mapPin} /> {locations[location][language].address}
      </Contact>
      <Contact>
        <Icon src={iconPhone} /> {locations[location][language].phone}
      </Contact>
      <Select
        left
        height="100%"
        width="22.8rem"
        onChange={changeLocation}
        backgroundColor="#0168b3"
        label={locations[location][language].title}
        values={getAddresses(locations, language)}
        icon={mapFlag}
        iconStyle="height: 1.7rem; margin-right: 1.2rem;"
      />
    </Header>
  </Cover>
);
