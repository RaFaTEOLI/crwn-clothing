import { UserActionTypes } from './user.types';
import userReducer from './user.reducer';

const initialState = {
  currentUser: null,
  error: null,
};

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should set currentUser to payload on setCurrentUser action', () => {
    const mockUser = { id: 1, displayName: 'Yihua' };

    expect(
      userReducer(initialState, {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: mockUser,
      }).currentUser
    ).toEqual(mockUser);
  });
});
