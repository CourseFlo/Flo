import {
  OPEN_SIGNUP,
  OPEN_LOGIN,
  CLEAR_MODALS,
} from '../constants';

const initialState = {
  signup: false,
  login: false,
};

// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_SIGNUP:
      return {
        signup: true,
        login: false,
      };
    case OPEN_LOGIN:
      return {
        signup: false,
        login: true,
      };
    case CLEAR_MODALS:
      return {
        signup: false,
        login: false,
      };
    default:
      return state;
  }
};
