import { SET_LOGIN } from '../constants';

export const setLogin = (loggedIn: boolean) => ({
  type: SET_LOGIN,
  loggedIn,
});
