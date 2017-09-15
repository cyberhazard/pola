import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HeaderText from './../../../Components/HeaderText';
import bg from './../../../_assets/images/profile-bg.png';
import m from './../../../media';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: auto;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${bg}') right bottom no-repeat;
  background-image: url('${require('./../../../_assets/images/structure/bg.png')}')
  background-position: top right, 115% 115%;
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`;

export const Header = styled(HeaderText)`
  margin: 2rem 0 2.8rem 0;
`;

export const Block = styled(Link)`
  text-align:center;
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  margin-bottom: 5rem;
`;

export const Text = styled.p`
  flex: 0 0 100%;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.4rem;
  text-align: justify;
  padding-right: 4rem;
  margin-bottom: 3rem;
  ${m.tablet`
    padding-right: 0;
  `}
`;

export const Img = styled.img`
  width:100%;
`;
