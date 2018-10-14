import axios from 'axios';

import * as ACTIONS from './types';
import * as API from '../constants/api-endpoints';

const DEFAULT_CALLBACK = () => {};

export const getGrowlsSuccess = (growls) => ({
  type: ACTIONS.GET_GROWLS_SUCCESS,
  payload: growls,
});

export const getGrowls = () => (dispatch, getState) =>
  axios({
    method: API.GET_GROWLS.METHOD,
    url: API.GET_GROWLS.URL,
    params: {
      amount: 1000,
      offset: 0,
    },
  }).then((response) => {
    dispatch(getGrowlsSuccess(response.data.data.growls));
  });

export const createGrowlSuccess = () => ({
  type: ACTIONS.CREATE_GROWL_SUCCESS,
});

export const resetGrowlCreationSuccess = () => ({
  type: ACTIONS.RESET_GROWL_CREATION_SUCCESS,
});

export const createGrowl = (text, callback = DEFAULT_CALLBACK) => (
  dispatch,
  getState,
) =>
  axios({
    method: API.CREATE_GROWL.METHOD,
    url: API.CREATE_GROWL.URL,
    data: {text},
  }).then((response) => {
    dispatch(createGrowlSuccess());
    dispatch(getGrowls());
    callback(null, null);
    // After 5 seconds of reporting that the growl was successfully created,
    // reset the success indicator to null
    setTimeout(() => {
      dispatch(resetGrowlCreationSuccess());
    }, 5000);
  });

export const deleteGrowlSuccess = () => ({
  type: ACTIONS.DELETE_GROWL_SUCCESS,
});

export const deleteGrowl = (growlId) => (dispatch, getState) =>
  axios({
    method: API.DELETE_GROWL.METHOD,
    url: `${API.DELETE_GROWL.URL}/${growlId}`,
  }).then((response) => {
    dispatch(deleteGrowlSuccess());
  });
