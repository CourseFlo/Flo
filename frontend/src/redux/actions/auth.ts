import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { returnErrors } from './error';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constants';

// setup configs, headers, and token
export const tokenConfig = (getState: Function): AxiosRequestConfig => {
  // get token from local storage
  const { token } = getState().auth;

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

// Check token and load user
export const loadUser = () => (dispatch: Function, getState: Function) => { //
  dispatch({ type: USER_LOADING });

  axios.get('/auth/user', tokenConfig(getState))
    .then((response: AxiosResponse) => {
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    })
    .catch((err: AxiosError) => {
      dispatch(returnErrors(err.response?.data, err.response?.status));
      dispatch({ type: AUTH_ERROR });
    });
};
