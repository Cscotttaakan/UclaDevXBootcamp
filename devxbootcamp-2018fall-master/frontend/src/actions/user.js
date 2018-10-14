import axios from 'axios';

import * as ACTIONS from './types';
import * as API from '../constants/api-endpoints';
import {getCookies} from '../utils/cookie';

export const getUserSuccess = (user) => ({
  type: ACTIONS.GET_USER_SUCCESS,
  payload: user,
});

export const getUser = () => (dispatch, getState) =>
  axios({
    method: API.GET_USER.METHOD,
    url: `${API.GET_USER.URL}/${getState().auth.userid}`,
  }).then((response) => {
    dispatch(getUserSuccess(response.data.data));
  });

export const createUserSuccess = (userId) => ({
  type: ACTIONS.CREATE_USER_SUCCESS,
  payload: userId,
});

export const createUser = (userData) => (dispatch, getState) =>
  axios({
    method: API.CREATE_USER.METHOD,
    url: API.CREATE_USER.URL,
    data: userData,
  }).then((response) => {
    dispatch(createUserSuccess(response.data.data.id));
  });

export const updateUserSuccess = (user) => ({
  type: ACTIONS.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUser = () => (dispatch, getState) =>
  axios({
    method: API.UPDATE_USER.METHOD,
    url: API.UPDATE_USER.URL,
  }).then((response) => {
    dispatch(updateUserSuccess(response.data));
  });
