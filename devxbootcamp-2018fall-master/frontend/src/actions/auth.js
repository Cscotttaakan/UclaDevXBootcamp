import axios from 'axios';

import * as ACTIONS from './types';
import * as API from '../constants/api-endpoints';
import {getUser} from './user';
import {getCookies, setCookie} from '../utils/cookie';

export const logInSuccess = (userId) => ({
  type: ACTIONS.LOGIN_SUCCESS,
  payload: {
    loggedIn: true,
    userId,
  },
});

export const logOutSuccess = () => ({
  type: ACTIONS.LOGOUT,
});

export const logIn = (email, password, callback) => (dispatch, getState) =>
  axios({
    method: API.LOG_IN.METHOD,
    url: API.LOG_IN.URL,
    data: {email, password},
  }).then((response) => {
    const cookies = getCookies();
    const userId = cookies['auth-login-as'];
    const tokenExists = !!cookies['auth-token'];
    if (tokenExists && userId) {
      dispatch(logInSuccess(userId));
    }
  });

export const logOut = () => (dispatch) => {
  setCookie('auth-token', 'invalid', '/', 0);
  setCookie('auth-login-as', 'invalid', '/', 0);
  dispatch(logOutSuccess());
};
