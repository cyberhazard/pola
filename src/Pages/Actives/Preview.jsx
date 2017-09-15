import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './../../Components/Button';

const Preview = styled.div`
  background-color: rgb(249, 248, 248);
  max-width: 56rem;
  padding: 3rem;
  margin-top: 11rem;
  position: fixed;
  top: 6rem;
  left: 120rem;
`;

const Title = styled.h3`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1.7rem;
`;

const Image = styled.img`
  width: 100%;
`;

const Label = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 700;
  border-bottom: 1px solid #E5E5E5;
  padding-top: 1.6rem;
  padding-bottom: 1.8rem;
`;

const Text = styled.span`
font-weight: 500;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 3rem;
`;

export default ({ shipName, photo, flag, portOfRegistry, typeOfVessel, id }) => {
  if (!shipName) return <div />;
  return (
    <Preview>
      <Title>{shipName}</Title>
      <Image src={photo} />
      <Label>Flag:<Text>{flag}</Text></Label>
      <Label>Port of Registry:<Text>{portOfRegistry}</Text></Label>
      <Label>Type of vessel:<Text>{typeOfVessel}</Text></Label>
      <Footer>
        <Link to={`/actives/${id}`}>
          <Button label="Подробнее" />
        </Link>
      </Footer>
    </Preview>
  );
};
