import axios from 'axios';
import { SET_LOGIN, GET_USERS, UPDATE_USER } from '../constants';
import { CourseId } from '../../type-interfaces/Course';
import { tokenConfig } from './auth';

export const setLogin = (loggedIn: boolean) => ({
  type: SET_LOGIN,
  loggedIn,
});

export const getUsersSuccess = (users : any[]) => ({
  type: GET_USERS,
  users,
});

export const updateUserSuccess = (user: any) => ({ // TODO set the user type????
  type: UPDATE_USER,
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

export const updateUser = (fields: Object) => (dispatch: Function, getState: Function) => {
  axios.post('/users/update/', {
    ...fields,
  }, tokenConfig(getState)).then((response) => {
    dispatch(updateUserSuccess(response.data));
  }).catch((err) => err);
};

export const starCourse = (starredCourse: CourseId) => (dispatch: Function, getState: Function) => {
  axios.post('/users/update/starredCourses/', {
    starredCourse,
  }, tokenConfig(getState)).then((response) => {
    dispatch(updateUserSuccess(response.data));
  }).catch((err) => err);
};

// export const getUsers = () => {
//   const res: any = axios
//     .get('/users')
//     .then( ({result}) => result.json());
//   return res;
// };
