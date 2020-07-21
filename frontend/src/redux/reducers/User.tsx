import { SET_LOGIN } from '../constants';

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
    case 'GET_USERS':
      return action.users;
    default:
      return store;
  }
};

export const getCurrentUser = (store: any = {}, action: any) => { // TODO: temporary setup for single user
  switch (action.type) {
    case 'GET_USERS':
      return action.users[0];
    case 'UPDATE_USER':
      return action.user;
    default:
      return store;
  }
};
