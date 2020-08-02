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
export const loadUser = () => (dispatch: Function, getState: Function) => {
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

// register user
export const register = ({ name, email, password, confirmPw }: any) => (dispatch: Function) => { // TODO: set destruct param type?
  axios.post('/users', {
    name, email, password, confirmPw,
  }).then((response: AxiosResponse) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  }).catch((err: AxiosError) => {
    dispatch(returnErrors(err.response?.data, err.response?.status, REGISTER_FAIL));
    dispatch({ type: REGISTER_FAIL });
  });
};

// logout user
export const logout = () => ({ type: LOGOUT_SUCCESS });

// login user
export const login = ({ email, password }: any) => (dispatch: Function) => { // TODO: set destruct param type?
  axios.post('/auth', {
    email, password,
  }).then((response: AxiosResponse) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  }).catch((err: AxiosError) => {
    dispatch(returnErrors(err.response?.data, err.response?.status, LOGIN_FAIL));
    dispatch({ type: LOGIN_FAIL });
  });
};
