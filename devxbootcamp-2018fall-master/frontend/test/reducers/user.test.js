import * as ACTIONS from '../../src/actions';
import userReducer from '../../src/reducers/user';

describe('user reducer', () => {
  describe('GET_USER_SUCCESS', () => {
    it('it updates the whole user object', () => {
      const initialState = {
        id: 1,
        name: 'Joe Bruin',
        description: 'Foo',
      };
      const expected = {
        id: 2,
        name: 'Josie Bruin',
        description: 'Bar',
      };
      const nextState = userReducer(
        initialState,
        ACTIONS.updateUserSuccess(expected),
      );

      expect(nextState).toMatchObject(expected);
    });
  });

  describe('CREATE_USER_SUCCESS', () => {
    it('puts the id in the user object', () => {
      const userId = 123;
      const nextState = userReducer({}, ACTIONS.createUserSuccess(userId));

      expect(nextState.id).toBe(userId);
    });
  });

  describe('UPDATE_USER_SUCCESS', () => {
    it('updates just the values that are recieved', () => {
      const initialState = {
        id: 1,
        name: 'Joe Bruin',
        description: 'Foo',
      };
      const nextState = userReducer(
        initialState,
        ACTIONS.updateUserSuccess({
          description: 'Bar',
        }),
      );

      expect(nextState).toMatchObject({
        ...initialState,
        description: 'Bar',
      });
    });
  });
});
