import tow from './tow';
import crane from './crane';
import other from './other';

export default [
  ...tow.map(el => ({ ...el, type: 'tow' })),
  ...crane.map(el => ({ ...el, type: 'crane' })),
  ...other.map(el => ({ ...el, type: 'other' })),
].map(el => ({ ...el, category: 'supply' }));
