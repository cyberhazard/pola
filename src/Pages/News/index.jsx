import React from 'react';
import styled from 'styled-components';
import PageTemplate from './../../Components/PageTemplate';
import HeaderText from './../../Components/HeaderText';
import Select from './../../Components/Select';
import calendar from './../../_assets/images/news/calendar.png';
import NewsBlock from './../../Components/NewsBlock';
import news from './../../_fake_api/news';
import m from './../../media';

const Page = styled(PageTemplate)`
  background-color: #004980;
  background-image: url('${require('./../../_assets/images/home-page3-bg-rect.png')}'), url('${require('./../../_assets/images/home-page3-bg-rect2.png')}');
  background-position: bottom right, top left;
  background-repeat: no-repeat, no-repeat;
  padding-right: 35.7rem;
  ${m.tablet`
    padding-left: 2rem;
    padding-right: 2rem;
    height: auto;
    min-height: 93.3333333333vh;
  `}
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const News = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Header = styled(HeaderBlock)`
  margin-bottom: 5rem;
  ${m.tablet`
    display: block;
  `}
`;

const values = [
  { name: 'За день', value: 'day' },
  { name: 'За неделю', value: 'week' },
  { name: 'За месяц', value: 'month' },
  { name: 'За все время', value: '' },
];

const getRange = (val) => {
  switch (val) {
    case 'month':
      return Date.now() - (1000 * 60 * 60 * 24 * 30);
    case 'day':
      return Date.now() - (1000 * 60 * 60 * 24);
    case 'week':
      return Date.now() - (1000 * 60 * 60 * 24 * 7);
    default:
      return '';
  }
};

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(filter) {
    this.setState({ filter });
  }

  render() {
    const filter = this.state.filter;
    const label = values.find(el => el.value === filter).name;
    const newses = news
      .filter(el => new Date(el.timestamp).valueOf() >= getRange(this.state.filter) || this.state.filter === '')
      .map(({ title, timestamp, id }) =>
        <NewsBlock title={title} timestamp={timestamp} id={id} key={id} />);
    newses.length = 6;
    return (
      <Page normal>
        <Header>
          <HeaderText white>Новости</HeaderText>
          <Select
            left
            label={label}
            icon={calendar}
            width="29.3rem"
            height="5.4rem"
            backgroundColor="#0397D6"
            iconStyle="margin-right: 1.2rem;"
            values={values}
            onChange={this.handleClick}
          />
        </Header>
        <News>
          {newses}
        </News>
      </Page>
    );
  }
}
