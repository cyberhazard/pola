import { combineReducers } from 'redux';
import language from './language';
import location from './location';

export default combineReducers({
  language,
  location,
});
