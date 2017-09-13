import { CHANGE_LOCATION } from './../_constants';

export default (location = 'moscow', action) => {
  switch (action.type) {
    case CHANGE_LOCATION: return action.payload;
    default: return location;
  }
};
