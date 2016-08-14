import { ActionTypes } from '../actions';

const initialState = { auth: false };

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return Object.assign({}, state, {
        auth: true,
      });
    case ActionTypes.DEAUTH_USER:
      return Object.assign({}, state, {
        auth: false,
      });
    case ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, {
        auth: false,
      });
    default:
      return state;
  }
};

export default AuthReducer;
