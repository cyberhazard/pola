import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

const Projects = ({ l }) => (
  <Page>
    <Breadcrumbs to="/about" label={l === 'RU' ? 'О группе' : 'About group'} current={l === 'RU' ? 'Проекты' : 'Projects'} />
    <Header>{l === 'RU' ? 'Проекты' : 'Projects'}</Header>
    {
      projects[l].map((project, index) => (
        <Block
          l={l}
          top
          key={project.name}
          header={project.name}
          more={project.id}
          img={project.photo}
          right={index % 2 !== 0}
        >
          {project.description}
        </Block>
      ))
    }
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Projects);
