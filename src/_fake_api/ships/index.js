import transport from './transport';
import supply from './supply';
import constructional from './constructional';

export default [
  ...transport,
  ...supply,
  ...constructional,
].map((_, i) => ({ id: i, ..._ }));
