import axios, { AxiosResponse, AxiosError } from 'axios';
import { SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE, GET_LETTER_CODES } from '../constants';
import { Filters } from '../../type-interfaces/Search';

/* Action for initiating search */

export const submitSearchSuccess = (offerings: any[]) => ({
  type: SUBMIT_SEARCH,
  offerings,
});

export const submitSearchFailure = (error: String) => ({
  type: SUBMIT_SEARCH_FAILURE,
  error,
});

export const setLoadingSearchTrue = () => ({
  type: SET_LOADING_SEARCH_TRUE,
});

export const submitSearch = (filters: Filters) => (dispatch: Function) => {
  dispatch(setLoadingSearchTrue());
  axios.post('/courses/search', {
    courseNumberRange: filters.numberRange,
    courseLetterCodes: filters.letterCodes,
    queryString: filters.query,
  }).then((response: AxiosResponse<any>) => {
    const offerings = response.data;
    dispatch(submitSearchSuccess(offerings));
  }).catch((err: AxiosError) => {
    const errorMsg = err.message;
    dispatch(submitSearchFailure(errorMsg));
  });
};

/* Search UI actions */

const getLetterCodeSuccess = (codes: string[]) => ({
  type: GET_LETTER_CODES,
  codes,
});

export const getLetterCodes = () => (dispatch: Function) => {
  axios.get('/courses/letterCodes')
    .then((response: AxiosResponse) => {
      dispatch(getLetterCodeSuccess(response.data));
    })
    .catch((err: AxiosError) => {
      console.warn('Error fetching course letter codes');
    });
};
