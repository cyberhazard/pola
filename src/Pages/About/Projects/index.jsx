import React from 'react';
import styled from 'styled-components';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Block from './../Structure/Block';
import projects from './../../../_fake_api/projects';
import m from './../../../media';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  height: 100%;
  background: white url('${require('./../../../_assets/images/structure/bg.png')}') top right no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="Проекты" />
    <Header>Структура группы</Header>
    {
      projects.map((project, index) => (
        <Block
          top
          key={project.name}
          header={project.name}
          more={project.name}
          img={project.photo}
          right={index % 2 !== 0}
        >
          {project.description}
        </Block>
      ))
    }
  </Page>
);
