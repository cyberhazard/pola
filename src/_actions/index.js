import { CHANGE_LANGUAGE, CHANGE_LOCATION } from './../_constants';

export const changeLang = lang => ({
  type: CHANGE_LANGUAGE,
  payload: lang,
});

export const changeLocation = location => ({
  type: CHANGE_LOCATION,
  payload: location,
});
