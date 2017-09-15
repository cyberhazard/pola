import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from 'react-fa';
import Button from './../../Components/Button';
import m from './../../media';

const Preview = styled.div`
  background-color: rgb(249, 248, 248);
  max-width: 56rem;
  padding: 3rem;
  position: relative;
  ${m.tablet`
    max-width: 90%;
  `}
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

const Wrapper = styled.div`
  margin-top: 11rem;
  position: fixed;
  top: 6rem;
  left: 120rem;
  ${m.tablet`
    margin-top: 0;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

const Close = styled(Icon)`
  display: none;
  ${m.tablet`
    display: block;
    position: absolute;
    top: 0.5rem;
    right: 0.8rem;
    font-size: 4rem;
    color: black;
  `}
`;

export default ({ shipName, photo, flag, portOfRegistry, typeOfVessel, id, close }) => {
  if (!shipName) return <div />;
  return (
    <Wrapper>
      <Preview>
        <Close name="times" onClick={close} />
        <Title>{shipName}</Title>
        <Image src={photo} />
        <Label>Flag: <Text>{flag}</Text></Label>
        <Label>Port of Registry: <Text>{portOfRegistry}</Text></Label>
        <Label>Type of vessel: <Text>{typeOfVessel}</Text></Label>
        <Footer>
          <Link to={`/actives/${id}`}>
            <Button label="Подробнее" />
          </Link>
        </Footer>
      </Preview>
    </Wrapper>
  );
};
