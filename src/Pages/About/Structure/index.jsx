import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from './../../../Components/Button';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Block from './Block';
import m from './../../../media';
import t from './t';

import ship1 from './../../../_assets/images/structure/ship1.png';
import ship2 from './../../../_assets/images/structure/ship2.png';
// import ship3 from './../../../_assets/images/structure/ship3.png';
import ship4 from './../../../_assets/images/structure/ship4.png';
import ship5 from './../../../_assets/images/structure/bauxite.JPG';
import ship6 from './../../../_assets/images/structure/ship6.png';
import ship7 from './../../../_assets/images/structure/ship7.png';
import ship8 from './../../../_assets/images/structure/ship8.png';
import ship9 from './../../../_assets/images/structure/ship9.jpg';
// import ship9 from './../../../_assets/images/structure/ship9.png';

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

const Footer = styled.div`
  text-align: center;
  padding-top: 5rem;
`;


const Structure = ({ l }) => (
  <Page>
    <Breadcrumbs to="/about" label={l === 'RU' ? 'О группе' : 'About'} current={l === 'RU' ? 'Компании группы' : 'Group Companies'} />
    <Header>{l === 'RU' ? 'Компании группы' : 'Group Companies'}</Header>
    <Block l={l} img={ship1} header="Pola Maritime Ltd." link="http://pola.com.cy/" >
      { t[l][0].text }
    </Block>
    <Block l={l} right img={ship2} header="ООО «ВодоходЪ»" link="https://vodohod.com/">
      Крупнейший российский оператор речных круизных перевозок, в управлении которого находится 26 собственных круизных пассажирских судов, а также 18 вспомогательных судов. Кроме того, в настоящий момент по заказу ООО “ВодоходЪ” на судостроительном заводе Красное Сормово строится новое современное круизное судно проекта PV 300 LMPP. По итогам 2016 года Водоходъ перевёз в общей сложности 500 тысяч пассажиров.
    </Block>
    <Block l={l} img={ship9} header="ООО «Пола Райз»" >
      Российская компания, основанная в 2015 году. На данный момент по заказу «Пола Райз» строится 10 судов проекта RSD-59 и одно судно проекта RSD-49 класса «река-море», а также 10 нефтеналивных барж проекта «Белмакс» озёрного класса. Строительство судов осуществляется на верфях «Красное Сормово», «НССЗ» и «Окская судоверфь». Все суда соответствуют последним требованиям IMO. Суда могут работать как в морских районах, так и на внутренних водных путях Российской Федерации, их габариты и осадка позволяют им перевозить грузы по всей российской речной системе и другим европейским странам.
    </Block>
    <Block l={l} right img={ship4} header="ООО «Пола Менеджмент»" >
      Российская компания, выполняющая функции стратегического (проектного) управления компаниями группы Pola. Компания обладает квалифицированным управленческим персоналом с богатым опытом работы в стивидорном, судоходном и судостроительном бизнесе. Компания была создана в 2012 году. Усилиями компании были разработаны и сопровождаются следующие проекты: проект «Гвинея», проект «RSD-59», проект «Белмакс», проект «Балтийская паромная компания».
    </Block>
    <Block l={l} img={ship5} header="Pola Logistic" >
      Компания занимается непосредственной реализацией проекта «Гвинея»
    </Block>
    <Block l={l} right img={ship6} header="ООО «НССЗ»" link="http://www.nssz.ru/">
      Судостроительно-судоремонтный завод, построивший более 300 судов различного класса и назначения от малых пассажирских до буксиров и судов класса “река-море”. Завод активно осваивает новые технологии и наращивает производственные мощности для развития не только основного направления - судостроения, но и традиционного - судоремонта. Завод регулярно выполняет контракты любой сложности для крупнейших заказчиков. Так, по заказу Министерства транспорта была построена серия из 4-х многофункциональных аварийно-спасательных судов неограниченного района плавания.
    </Block>
    <Block l={l} img={ship7} header="ООО «Озерная Верфь»" link="http://lakyverf.com/">
      Выйдя на рынок в 2005 году с концепцией «качественное строительство яхт класса «люкс» по индивидуальному заказу», в настоящий момент специализируется на производстве многоцелевых скоростных катеров.
    </Block>
    <Block l={l} right img={ship8} header="Inok N.V. Ltd." link="http://www.inok-tm.com/">
      Компания оказывает услуги технического и кадрового менеджмента. Компания организует техническое обслуживание и ремонт флота, а также занималась  комплектованием экипажей более 40 судов.
    </Block>
    <Footer>
      <Link to="/about/profile">
        <Button label={l === 'RU' ? 'Профиль группы' : 'Group’s Profile Page'} />
      </Link>
    </Footer>
  </Page>
);

export default connect(
  state => ({ l: state.language }),
)(Structure);
