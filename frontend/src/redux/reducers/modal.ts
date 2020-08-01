import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  CLEAR_MODALS,
  SIGNUP_MS,
  LOGIN_MS,
} from '../constants';

const initialState = {
  state: null,
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SIGNUP:
      return {
        state: SIGNUP_MS,
      };
    case OPEN_LOGIN:
      return {
        state: LOGIN_MS,
      };
    case CLEAR_MODALS:
      return {
        state: null,
      };
    default:
      return state;
  }
};
