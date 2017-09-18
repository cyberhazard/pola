import sea from './sea';
import river from './river';
import riversea from './riversea';

export default [
  ...sea.map(el => ({ ...el, type: 'sea' })),
  ...river.map(el => ({ ...el, type: 'river' })),
  ...riversea.map(el => ({ ...el, type: 'riversea' })),
].map(el => ({ ...el, category: 'transport' }));
