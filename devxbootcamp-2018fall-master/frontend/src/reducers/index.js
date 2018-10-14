// @flow

import {combineReducers} from 'redux';
import userReducer from './user';
import growlsReducer from './growls';
import authReducer from './auth';

export default combineReducers({
  user: userReducer,
  growls: growlsReducer,
  auth: authReducer,
});
