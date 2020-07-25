import { SET_LOGIN, GET_USERS } from '../constants';

export const setLogin = (store: boolean = false, action: any) => {
  switch (action.type) {
    case SET_LOGIN:
      return action.loggedIn;
    default:
      return store;
  }
};

export const getUsers = (store: any[] = [], action: any) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return store;
  }
};
