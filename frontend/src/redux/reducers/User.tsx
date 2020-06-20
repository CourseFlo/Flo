import { SET_LOGIN } from '../constants';

export const setLogin = (store: boolean = false, action: any) => {
  switch (action.type) {
    case SET_LOGIN:
      console.log("set login reducer", store, action);
      return action.loggedIn;
    default:
      return store;
  }
};
