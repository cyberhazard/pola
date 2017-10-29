import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import m from './../../media';

import Nevsky1 from './../../_assets/images/actives/nevsky-1.jpg';
import Nevsky2 from './../../_assets/images/actives/nevsky-2.jpg';

const Category = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  background-color: rgb(243, 243, 243);
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.6rem 5rem 1.8rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  transition: .2s;
  ${({ isActive }) => isActive && 'color: white; background-color: rgb(8, 107, 181);'}
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 0.7rem);
    left: 3rem;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: rgb(7, 107, 181);
    ${({ isActive }) => isActive && 'background-color: white;'}
  }
`;

const Table = styled.div`
  background-color: rgb(249, 248, 248);
`;

const Cell = styled.div`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 1.6rem;
  flex-shrink: 0;
  flex-grow: 0;
  padding-left: 1rem;
  &:nth-child(1) {
    width: 45.7%;
    ${m.tablet`width: 70%;`}
  }
  &:nth-child(2) {
    width: 15.3%;
    ${m.tablet`width: 30%;`}
  }
  &:nth-child(3) {
    width: 24.4%;
    ${m.tablet`display: none;`}
  }
  &:last-child {
    width: 1%;
    ${m.tablet`display: none;`}
  }
`;

const Line = styled.div`
  padding: 2.4rem 2rem 1.5rem 3rem;
  display: flex;
  cursor: pointer;
  ${m.tablet`
    padding-left: 1.5rem;
  `}
  ${({ th }) => th && 'font-weight: 700; cursor: auto;'}
  ${({ isSelected }) => isSelected && `
    background-color: rgb(8, 107, 181);
    & div, span {
      color: white;
    }
  `}
`;

const Caret = styled(Icon)`
  color: rgb(8, 107, 181);
  font-size: 2rem;
  margin-right: 1rem;
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState(p => ({ isOpen: !p.isOpen }));
  }

  render() {
    if (this.props.empty) {
      return (
        <Category>
          <Label isActive={this.state.isOpen} onClick={this.toggleOpen}>{this.props.label}</Label>
          { this.state.isOpen && (
            <Table>
              <Line th>
                <Cell>Судно</Cell>
                <Cell>Год</Cell>
                <Cell>Дедвейт</Cell>
                <Cell>Флаг</Cell>
              </Line>
              <Line>
                <Cell style={{ width: '100%' }}>В стадии наполнения</Cell>
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
              </Line>
            </Table>
          ) }
        </Category>
      );
    }
    if (this.props.lakeverf) {
      return (
        <Category>
          <Label isActive={this.state.isOpen} onClick={this.toggleOpen}>{this.props.label}</Label>
          { this.state.isOpen && (
            <Table>
              <Line>
                <Cell style={{ width: '100%', lineHeight: '2.2rem' }}>Цех яхтостроения<br /><br />
компании, который занимает 1900 кв.м., осуществляет весь комплекс работ: электромеханические, малярные, слесарные, трубопроводные, а также пуско-наладку оборудования и механизмов.<br /><br /> Здесь, в постоянной связи с производством, находится дизайнерско-конструкторское бюро, которое имеет специализированное программное обеспечение и оснащено всеми видами оборудования, позволяющего производить обработку технических проектов и разработку документации. <br /><br /> В 2009 году завершилось возведение Большого цеха яхтостроения, где сегодня производятся все необходимые работы по достройке яхт, включая монтаж интерьера. Отличительная особенность Большого цеха в том, что его размеры (общая площадь - 2500 кв.м.) дают возможность вести одновременное строительство двух корпусов длиной до 75 метров. </Cell>
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
              </Line>
            </Table>
          ) }
        </Category>
      );
    }
    if (this.props.nevsky) {
      return (
        <Category>
          <Label isActive={this.state.isOpen} onClick={this.toggleOpen}>{this.props.label}</Label>
          { this.state.isOpen && (
            <Table>
              <Line>
                <Cell style={{ width: '100%', lineHeight: '2.2rem' }}>Для выполнения программ судостроения и судоремонта Невский судостроительно-судоремонтный завод располагает необходимыми производственными мощностями: заготовительное производство, судокорпусное производство, механообрабатывающее производство, трубопроводное производство, малярное и достроечное производство, производство по ремонту ДВС, участок ремонта ВРК, спуско-подъемное устройство Г-300.<br /><br />Заготовительное производство оборудовано автоматизированной линией обработки металла «Metra», машинами плазменной резки «Кристалл» и «ESAB», крановым оборудованием грузоподъемностью до 100 т. <br /><br /> Производственные мощности заготовительного производства позволяют перерабатывать до 10 тысяч т металлоконструкций в год.
                  <br /><br />Судокорпусное производство включает цех Р-32 и крытый эллинг из 3-х пролетов: 1-й пролет 234х31х22 м для изготовления объемных секций на пастелях и блоков, 2-й и 3-й пролеты 180х42х22 м и 228х48х22 м на 4 построечных места для судов длиной до 100 м. <br /><br /> <img style={{ width: '50%', float: 'left', paddingRight: '1rem' }} src={Nevsky2} alt="" />
В 2009 г. введена в эксплуатацию автоматизированная линия плоских секций компании «IMG Ingenieurtechnik und Maschinenbau GmbH». <br />
Линия предназначена для сборки и сварки плоских секций от изготовления полотнищ до сборки секций с набором, которые на следующем этапе формируются в объемные секции и блоки судовых корпусов. Изготовление секций производится поточно-позиционным методом.  <br /> <br /> В 2011 году линия вышла на проектную мощность – 1000 т готовых металлоконструкций в месяц. <br /><br /> Механообрабатывающее производство включает блок цехов и участков общей площадью 6000 кв.м, обновленный парк станочного оборудования (около 90 единиц) и позволяет выполнять все виды механообработки деталей весом до 5 т и длиной до 11 м. Выполняются все виды механической обработки, включая токарные, фрезерные и расточные работы. <br /><br /> Трубопроводное производство оборудовано отрезными и трубогибочными станками холодной гибки труб, установками для опрессовки трубопроводов, ТВЧ станком для горячей гибки труб диаметром до 273 мм. Участок занимает площадь 2760 кв.м, оборудован кранами г/п 5 и 20 т. <br /><br />  <img style={{ width: '50%', float: 'right', paddingLeft: '1rem' }} src={Nevsky1} />  Малярное и достроечное производства выполняют окраску внутренних и наружных помещений, корпусную и трубную изоляцию в полном объеме, сдачу жилых и служебных помещений под ключ. <br /><br /> Производство по ремонту ДВС оборудовано стендом для испытания дизелей после ремонта. Имеет свой участок мойки деталей и станочный парк. <br /><br /> Участок ремонта ВРК оборудован валовыми станками для обработки гребных валов и другим специальным оборудованием.<br /><br /> Спуско-подъемное устройство Г-300 оборудовано 12-ю наклонными путями; кранами грузоподъемностью 80, 32 и 16 т, 75-. стапельными тележками, 13-ю косяковыми тележками и лебедками грузоподъемностью 350 т каждая. Позволяет спускать и поднимать на берег суда длиной до 150 м и доковым весом до 3000 т. Горизонтальная часть слипа оборудована откатными рельсовыми путями и стапельными тележками грузоподъёмностью 75 т. Общая площадь слипа 35000 кв.м. <br /><br /> Трудовые ресурсы: на заводе трудится более тысячи человек. </Cell>
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
                <Cell style={{ display: 'none' }} />
              </Line>
            </Table>
          ) }
        </Category>
      );
    }
    return (
      <Category>
        <Label isActive={this.state.isOpen} onClick={this.toggleOpen}>{this.props.label}</Label>
        {
          this.state.isOpen &&
          <Table>
            <Line th>
              <Cell>Судно</Cell>
              <Cell>Год</Cell>
              <Cell>Дедвейт</Cell>
              <Cell>Флаг</Cell>
            </Line>
            {
              this.props.ships &&
              this.props.ships.map(ship => (
                <Line key={ship.id} onClick={() => this.props.selectID(ship.id)} isSelected={ship.id === this.props.selectedID}>
                  <Cell><Caret name="caret-right" />{ship.shipName}</Cell>
                  <Cell>{ship.year}</Cell>
                  <Cell>{ship.deadweight}</Cell>
                  <Cell>{ship.flag}</Cell>
                </Line>
              ))
            }
          </Table>
        }
      </Category>
    );
  }
}
