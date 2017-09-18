import React from 'react';
import { Gmaps, Marker } from 'react-gmaps';
import { Page, Places, Contacts } from './styled';
import { Header, Wave } from './../styled';
import Targets from './Targets';

import waveWhite from './../../../_assets/images/wave-white.png';

const params = { v: '3.exp', key: 'YOUR_API_KEY' };

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coords: { lat: 55.7482413, lng: 37.5404932 } };
    this.changetCoord = this.changetCoord.bind(this);
  }

  changetCoord(coords) {
    console.log(coords);
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
            lng={this.state.coords.lng}
            zoom={12}
            loadingMessage={'Pola GROUP'}
            params={params}
          >
            <Marker
              lat={this.state.coords.lat}
              lng={this.state.coords.lng}
              draggable
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
