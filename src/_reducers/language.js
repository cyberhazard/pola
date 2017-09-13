import { CHANGE_LANGUAGE } from './../_constants';

export default (lang = 'RU', action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: return action.payload;
    default: return lang;
  }
};
