import { combineReducers } from 'redux';
import auth from './auth';
import card from './auth';

export default combineReducers({
  auth,
  card
});
