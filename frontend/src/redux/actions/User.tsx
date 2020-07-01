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

// Get the user info
export const getUsers = () => {
  return (dispatch: Function) => {
    axios.get(`http://localhost:9000/users`)
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((err) => err);
  };
};
