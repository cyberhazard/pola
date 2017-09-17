import styled from 'styled-components';
import HeaderText from './../../Components/HeaderText';
// import bg from './../../_assets/images/contacts-bg.png';
import backg from './../../_assets/images/home-page4-bg-rect.png';
import bg2 from './../../_assets/images/home-page2-bg-rect.png';
import m from './../../media';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 5rem;
  background-color: #012641;
  background-image: url('${backg}'), url('${bg2}');
  background-position: top left, center right;
  background-repeat: no-repeat, no-repeat;
  ${m.ipad`
    padding-right: 10rem;
  `}
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
  `}

`;

export const Header = styled(HeaderText)`
  margin: 2rem 0 5rem 0;
  color: white;
  &:before{
    background-size:cover;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 8.6rem;
  ${m.tablet`
    display: block;
  `}
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items:flex-start;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 18rem;
  ${m.tablet`
    margin-right: 0;
  `}
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:flex-start
  flex-direction: column;
  flex-basis:40%
`;

