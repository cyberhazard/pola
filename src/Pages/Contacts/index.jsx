import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Gmaps, Marker } from 'react-gmaps';
import CurrentData from './CurrentData';
import MiniMap from './MiniMap';
import Feedback from './Feedback';
import Footer from './Footer';
import Map from './../Home/Page4';
import Targets from './../Home/Page4/Targets';
import { Page, Header, Top, Bottom, LeftSide, RightSide } from './styled';
import { Contacts, Places } from './../Home/Page4/styled';


export const MapBlock = styled(Map)`
  width:100%;
`;

const params = { v: '3.exp', key: 'AIzaSyDWWWRlTTqNtKMMdHnSl9-Xqf9HS_HVsbQ' };

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { coords: { lat: 55.7482413, lng: 37.5404932 } };
    this.changetCoord = this.changetCoord.bind(this);
  }

  changetCoord(coords) {
    this.setState({ coords });
  }
  render() {
    const { l } = this.props;
    return (
      <Page>
        <Header>{l === 'RU' ? 'Контакты' : 'Contacts'}</Header>
        <Top>
          <LeftSide>
            <CurrentData />
            <MiniMap l={l} />
          </LeftSide>
          <RightSide>
            <Feedback l={l} />
          </RightSide>
        </Top>
        <Bottom>
          <Contacts>
            <Gmaps
              className="google-maps"
              width={'100%'}
              height={'100%'}
              lat={this.state.coords.lat}
              lng={this.state.coords.lng - (window.innerWidth < 768 ? 0 : 0.01)}
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
          <Footer l={l} />
        </Bottom>
      </Page>
    );
  }
}

export default connect(
  state => ({ l: state.language }),
)(Main);
