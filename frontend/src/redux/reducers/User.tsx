import { GET_USERS } from '../constants';

export const getUsers = (store: any[] = [], action: any) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return store;
  }
};
