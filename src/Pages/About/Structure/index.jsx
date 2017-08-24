import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './../../../Components/Button';
import Breadcrumbs from './../../../Components/Breadcrumbs';
import HeaderText from './../../../Components/HeaderText';
import Block from './Block';

import ship1 from './../../../_assets/images/structure/ship1.png';
import ship2 from './../../../_assets/images/structure/ship2.png';
import ship3 from './../../../_assets/images/structure/ship3.png';
import ship4 from './../../../_assets/images/structure/ship4.png';
import ship5 from './../../../_assets/images/structure/ship5.png';
import ship6 from './../../../_assets/images/structure/ship6.png';
import ship7 from './../../../_assets/images/structure/ship7.png';
import ship8 from './../../../_assets/images/structure/ship8.png';
import ship9 from './../../../_assets/images/structure/ship9.png';

const Page = styled.div`
  position: relative;
  min-height: 93.3333333333vh;
  padding-top: 6.2626262626vh;
  padding-left: 10rem;
  padding-right: 23rem;
  padding-bottom: 10rem;
  background: white url('${require('./../../../_assets/images/structure/bg.png')}') top right no-repeat;
`;

const Header = HeaderText.extend`
  margin: 3rem 0 5rem 0;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 5rem;
`;


export default () => (
  <Page>
    <Breadcrumbs to="/about" label="О группе" current="Структура группы" />
    <Header>Структура группы</Header>
    <Block img={ship1} header="ООО «ВодоходЪ»" link="http://google.com">
      Это крупнейший российский оператор речных круизных перевозок,
      в управлении которого находится 26 собственных круизных пассажирских судов,
      а также 18 вспомогательных судов. Кроме того, в настоящий момент по заказу
      ООО “ВодоходЪ” на судостроительном заводе Красное Сормово  строится новое
      современное круизное судно проекта PV 300 LMPP.
      По итогам 2016 года Водоходъ перевёз в общей сложности 500 тысяч пассажиров.
    </Block>
    <Block right img={ship2} header="Pola Maritime Ltd." link="http://google.com">
      Основана в 2006 году и имеет богатый опыт на рынке морских перевозок. Компания
      оперирует судами типа “Handysize” в количестве 19 единиц, из которых 11 собственных
      судов и 8 судов, арендованных на условиях тайм-чартера. Pola Maritime находится
      под юрисдикцией Республики Кипр. Компания обладает крайне молодым флотом:
      средний возраст не превышает 5-ти лет. Общая
      грузоподъёмность флота превышает 650 тысяч тонн. По итогам 2016 года флотом Pola
      Maritime перевезено более 5  млн. тонн грузов.
    </Block>
    <Block img={ship3} header="Pola Maris Ltd." link="http://google.com">
      Компания основана снована в 2006 году и выполняет коммерческие
      функции для Pola Maritime. Компания зарегистрирована в Бельгии,
      а офис компании находится в порту города Антверпен. Порт Антверпен
      входит в двадцатку крупнейших портов мира и является одним из центров
      мирового судоходного бизнеса.
      В штате компании работают брокеры с мировым именем, имеющие
      отличную репутации на рынке морских перевозок. Кроме того компания
      обладает крайне квалифицированным персоналом в области операционного
      управления флотом.
    </Block>
    <Block right img={ship4} header="ООО «Пола Райз»" link="http://google.com">
      Российская компания, основанная в 2015 году. На данный момент
      по заказу «Пола Райз» строится 10 судов проекта RSD-59 и одно судно проекта
      RSD-49 класса «река-море», а также 10 нефтеналивных барж проекта «Белмакс»
      озёрного класса. Строительство судов осуществляется на верфях «Красное Сормово»,
      «НССЗ» и «Окская судоверфь». Все суда соответствуют последним требованиям и
      нструментов IMO. Суда могут работать как в морских районах, так и на внутренних
      водных путях России, их габариты и осадка позволяют им перевозить
      грузы по всей российской речной системе и другим европейским странам.
    </Block>
    <Block img={ship5} header="Pola Logistics Ltd." link="http://google.com">
      Компания оказывает экспедиторские и брокерские услуги и
      была создана специально для ведения проектов, требующих реализации
      сложных логистических схем. Компания находится под юрисдикцией Республики Кипр.
      Компания занимается непосредственной реализацией проекта «Гвинея».
    </Block>
    <Block right img={ship6} header="ООО «Пола Менеджмент»" link="http://google.com">
      российская компания, выполняющая функции стратегического (проектного)
      управления компаниями группы Pola. Компания обладает квалифицированным
      управленческим персоналом с богатым опытом работы в стивидорном, судоходном
      и судостроительном бизнесе. Компания была создана в 2012 году.
      Усилиями компании были разработаны и сопровождаются следующие проекты: проект
      «Гвинея», проект «RSD-59», проект «Белмакс», проект «Усть-Луга-Балтийск».
    </Block>
    <Block img={ship7} header="ООО «НССЗ»" link="http://google.com">
      Судостроительно-судоремонтный завод, построивший более 300 судов различного
      класса и назначения от малых пассажирских до буксиров и судов класса “река-море”.
      Завод активно осваивает новые технологии и наращивает  производственные
      мощности для развития не только основного направления - судостроения, но и
      традиционного - судоремонта. Завод регулярно выполняет контракты любой сложности
      для крупнейших заказчиков. Так, по заказу Министерства транспорта была построена
      серия из 4-х многофункциональных аварийно-спасательных судов неограниченного района
      плавания.
    </Block>
    <Block right img={ship8} header="ООО «Озерная Верфь»" link="http://google.com">
      Российская компания, выполняющая функции стратегического (проектного)
      управления компаниями группы Pola. Компания обладает квалифицированным
      управленческим персоналом с богатым опытом работы в стивидорном, судоходном
      и судостроительном бизнесе. Компания была создана в 2012 году.
      Усилиями компании были разработаны и сопровождаются следующие проекты:
      проект «Гвинея», проект «RSD-59», проект «Белмакс», проект «Усть-Луга-Балтийск».
    </Block>
    <Block img={ship9} header="Inok N.V. Ltd." link="http://google.com">
      Судостроительно-судоремонтный завод, построивший более 300 судов различного
      класса и назначения от малых пассажирских до буксиров и судов класса
      “река-море”. Завод активно осваивает новые технологии и наращивает
      производственные мощности для развития не только основного
      направления - судостроения, но и традиционного - судоремонта. Завод регулярно
      выполняет контракты любой сложности для крупнейших заказчиков. Так, по заказу
      Министерства транспорта была построена серия из 4-х многофункциональных
      аварийно-спасательных судов неограниченного района плавания.
    </Block>
    <Footer>
      <Link to="/about/profile">
        <Button label="Профиль группы" />
      </Link>
    </Footer>
  </Page>
);