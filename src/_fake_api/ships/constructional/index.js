import loader from './loader';
import other from './other';

export default [
  ...loader.map(el => ({ ...el, type: 'loader' })),
  ...other.map(el => ({ ...el, type: 'other' })),
].map(el => ({ ...el, category: 'constructional' }));
