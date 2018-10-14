import authReducer, {DEFAULT_AUTH_STATE} from '../../src/reducers/auth';
import * as ACTIONS from '../../src/actions';

describe('auth reducer', () => {
  describe('LOGIN_SUCCESS', () => {
    it('makes loggedIn true and updates userid', () => {
      const userId = '123';
      const nextState = authReducer({}, ACTIONS.logInSuccess(userId));

      expect(nextState).toMatchObject({
        loggedIn: true,
        userId,
      });
    });
  });

  describe('LOGOUT', () => {
    it('resets auth state to default', () => {
      const nextState = authReducer(
        {
          loggedIn: true,
          userId: '123',
        },
        ACTIONS.logOutSuccess(),
      );
      expect(nextState).toMatchObject(DEFAULT_AUTH_STATE);
    });
  });
});
