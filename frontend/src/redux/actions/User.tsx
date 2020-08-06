import axios from 'axios';
import { UPDATE_USER } from '../constants';
import { CourseId } from '../../type-interfaces/Course';
import { tokenConfig } from './auth';

export const updateUserSuccess = (user: any) => ({ // TODO set the user type????
  type: UPDATE_USER,
  user,
});

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
