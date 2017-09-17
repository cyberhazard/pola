import styled from 'styled-components';
import HeaderText from './../../../Components/HeaderText';
import bg from './../../../_assets/images/profile-bg.png';
import m from './../../../media';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${bg}') right bottom no-repeat;
  background-image: url('${require('./../../../_assets/images/structure/bg.png')}'), url('${require('./../../../_assets/images/bg-profile-ship.png')}');
  background-position: top right, 115% 115%;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
    height: auto;
  `}
`;

export const Header = styled(HeaderText)`
  margin: 2rem 0 2.8rem 0;
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 5rem;
  ${m.tablet`
    display: block;
  `}
`;

export const Text = styled.p`
  flex: 0 0 50%;
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 3.4rem;
  text-align: justify;
  padding-right: 4rem;
  ${m.tablet`
    padding-right: 0;
  `}
`;
