import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './../../Components/Button';
import HeaderText from './../../Components/HeaderText';
import ships from './../../_fake_api/ships';
import Breadcrumbs from './../../Components/Breadcrumbs';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../_assets/images/structure/bg.png')}') top right no-repeat;
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

const Line = styled.div`
  display: flex;
  border-bottom: 1px solid #E5E5E5;
  padding-top: 1.6rem;
  padding-bottom: 1.8rem;
  &:first-child {
    padding-top: 0;
  }
`;

const Label = styled.div`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 700;
  white-space: nowrap;
`;

const Text = styled.div`
  font-weight: 500;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Image = styled.img`
  float: left;
  margin-right: 5rem;
  margin-bottom: 2rem;
`;

const Footer = styled.div`
  padding-top: 5rem;
  text-align: center;
`;


export default ({ match }) => {
  const { id } = match.params;
  const data = ships.find(ship => ship.id === +id);
  return (
    <Page>
      <Breadcrumbs to="/actives" label="Активы" current={data.shipName} />
      <Header>{data.shipName}</Header>
      <Image src={data.photo} />
      <div>
        <Line><Label>Vessel’s name: </Label><Text>{data.shipName}</Text></Line>
        <Line><Label>IMO number: </Label><Text>{data.imo}</Text></Line>
        <Line><Label>Vessel’s previous name(s) and date(s) of change:  </Label><Text>{data.prevData}</Text></Line>
        <Line><Label>Flag:  </Label><Text>{data.flag}</Text></Line>
        <Line><Label>Port of Registry:  </Label><Text>{data.portOfRegistry}</Text></Line>
        <Line><Label>Type of vessel:  </Label><Text>{data.typeOfVessel}</Text></Line>
        <Line><Label>Technical operator - Full style:  </Label><Text>{data.technicalOperator}</Text></Line>
        <Line><Label>Commercial operator - Full style:  </Label><Text>{data.commercialOperator}</Text></Line>
        <Line><Label>Builder (where built) / Yard number:  </Label><Text>{data.builder}</Text></Line>
        <Line><Label>Date delivered (built):  </Label><Text>{data.dateDelivered}</Text></Line>
        <Line><Label>Length Over All (LOA):  </Label><Text>{data.lengthOverAll}</Text></Line>
        <Line><Label>Length Between Perpendiculars (LBP):  </Label><Text>{data.lengthBetweenPerpendiculars}</Text></Line>
        <Line><Label>Extreme breadth (Beam):   </Label><Text>{data.extremeBreadth}</Text></Line>
        <Line><Label>Moulded depth:   </Label><Text>{data.mouldedDepth}</Text></Line>
        <Line><Label>Deadweight:   </Label><Text>{data.deadweight}</Text></Line>
      </div>
      <Footer>
        <Link to="/actives">
          <Button label="Назад к активам" />
        </Link>
      </Footer>
    </Page>
  );
};
