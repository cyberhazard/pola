import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';
import { Page, Places, Contacts } from './styled';
import { Header, Wave } from './../styled';
import Targets from './Targets';

import waveWhite from './../../../_assets/images/wave-white.png';

const params = { v: '3.exp', key: 'AIzaSyDWWWRlTTqNtKMMdHnSl9-Xqf9HS_HVsbQ' };

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coords: { lat: 55.7482413, lng: 37.5404932 } };
    this.changetCoord = this.changetCoord.bind(this);
  }

  changetCoord(coords) {
    this.setState({ coords });
  }

  render() {
    return (
      <Page>
        <Header><Wave src={waveWhite} /> Контакты </Header>
        <Contacts>
          <Gmaps
            width={'100%'}
            height={'100%'}
            lat={this.state.coords.lat}
            lng={this.state.coords.lng - 0.01}
            zoom={14}
            loadingMessage={'Pola GROUP'}
            params={params}
          >
            <Marker
              lat={this.state.coords.lat}
              lng={this.state.coords.lng}
            />
          </Gmaps>
          <Places>
            <Targets changetCoord={this.changetCoord} />
          </Places>
        </Contacts>
      </Page>
    );
  }
}
