import axios from 'axios';
import { SET_LOGIN } from '../constants';

export const setLogin = (loggedIn: boolean) => ({
  type: SET_LOGIN,
  loggedIn,
});

// export const changeCoolStatusSuccess = (currUsername: string, iamcool: boolean) => ({
//   type: 'CHANGE_COOL_STATUS',
//   currUsername,
//   iamcool,
// });

export const getUsersSuccess = (users : any[]) => ({
  type: 'GET_USERS',
  users,
});

export const updateUserSuccess = (user: any) => ({ // TODO set the user type????
  type: 'UPDATE_USER',
  user,
});

// Get the user info
export const getUsers = () => (dispatch: Function) => {
  axios.get('/users')
    .then((response) => {
      dispatch(getUsersSuccess(response.data));
    })
    .catch((err) => err);
};

export const updateUser = (id: String, fields: Object) => (dispatch: Function) => {
  axios.post(`/users/update/${id}`, {
    ...fields,
  }).then((response) => {
    dispatch(updateUserSuccess(response.data));
  }).catch((err) => err);
};

// export const getUsers = () => {
//   const res: any = axios
//     .get('/users')
//     .then( ({result}) => result.json());
//   return res;
// };
