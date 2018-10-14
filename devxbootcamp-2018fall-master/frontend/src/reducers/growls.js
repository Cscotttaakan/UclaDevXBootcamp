import * as ACTIONS from '../actions/types';
import mockGrowls from '../sample-data/growls';

const DEFAULT_GROWLS_STATE = {
  successfulCreation: null,
  // TODO: Reset this to [] once you're ready to hook it up to the backend
  growlsList: mockGrowls,
};

const growlsReducer = (state = DEFAULT_GROWLS_STATE, {type, payload}) => {
  if (type === ACTIONS.GET_GROWLS_SUCCESS) {
    return {
      ...state,
      growlsList: payload,
      // TODO: Make sure this naming matches up
    };
  } else if (type === ACTIONS.CREATE_GROWL_SUCCESS) {
    return {
      ...state,
      successfulCreation: true,
    };
  } else if (type === ACTIONS.RESET_GROWL_CREATION_SUCCESS) {
    return {
      ...state,
      successfulCreation: null,
    };
  } else if (type === ACTIONS.DELETE_GROWL_SUCCESS) {
    return {
      ...state,
      // Remove the deleted growl from our local copy of growls
      growlsList: state.growlsList.filter((growl) => growl.id !== payload.id),
    };
  }

  return state;
};

export default growlsReducer;
