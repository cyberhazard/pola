import styled from 'styled-components';
import HeaderText from './../../Components/HeaderText';
import bg from './../../_assets/images/contacts-bg.png';

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
  background: #012641 url('${bg}') right top no-repeat;
  background-position: top right, 115% 115%;
`;

export const Header = styled(HeaderText)`
  margin: 2rem 0 2.8rem 0;
  color: white;
  &:before{
    background-size:cover;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

