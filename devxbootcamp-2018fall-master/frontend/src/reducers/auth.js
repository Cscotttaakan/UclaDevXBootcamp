import * as ACTIONS from '../actions/types';
import {getCookies} from '../utils/cookie';

export const DEFAULT_AUTH_STATE = {
  // TODO: Change this to default to false when we hook up to backend
  loggedIn: true,
  // TODO: Change this to '' when we hook up to backend
  userId: '1',
};

const initState = () => {
  // TODO: Remove this line when we hook up to backend
  return DEFAULT_AUTH_STATE;

  const cookies = getCookies();
  const userId = cookies['auth-login-as'];
  const tokenExists = !!cookies['auth-token'];
  if (tokenExists && userId) {
    return {...DEFAULT_AUTH_STATE, loggedIn: tokenExists, userId};
  }
  return DEFAULT_AUTH_STATE;
};

const authReducer = (state = initState(), {type, payload}) => {
  switch (type) {
    case ACTIONS.LOGIN_SUCCESS:
      return {...state, loggedIn: true, userId: payload.userId};
    case ACTIONS.LOGOUT:
      return {...state, ...DEFAULT_AUTH_STATE};
    default:
      return state;
  }
};

export default authReducer;
