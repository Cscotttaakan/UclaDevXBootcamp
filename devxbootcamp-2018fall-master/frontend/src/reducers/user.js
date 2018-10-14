import * as ACTIONS from '../actions/types';

// TODO: Set these to null when we hook up to 
const DEFAULT_USER_STATE = {
  id: '1',
  name: 'Joe Bruin',
  description: 'A kickass DevX developer that knows git, test-driven development, and deployment!',
};

const userReducer = (state = DEFAULT_USER_STATE, {type, payload}) => {
  if (type === ACTIONS.GET_USER_SUCCESS) {
    return {...payload};
  } else if (type === ACTIONS.CREATE_USER_SUCCESS) {
    return {
      ...state,
      id: payload,
    };
  } else if (type === ACTIONS.UPDATE_USER_SUCCESS) {
    return {
      ...state,
      ...payload,
    };
  }
  return state;
};

export default userReducer;
