import { css } from 'styled-components';

const sizes = {
  big: 1600,
  medium: 1440,
  ipad: 1024,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
  // big: 1600,
  // medium: 1440,
  // desktop: 992,
  // tablet: 768,
  // phone: 376,
}, {});
