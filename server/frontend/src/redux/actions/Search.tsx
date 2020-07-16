import axios, { AxiosResponse, AxiosError } from 'axios';
import { CHANGE_FILTERS, SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE } from '../constants';
import { Filters } from '../../type-interfaces/Search';
import { API } from '../../util/config';

export const changeFilters = (filters: Filters) => ({
  type: CHANGE_FILTERS,
  query: filters.query,
  letterCodes: filters.letterCodes,
  numberRange: filters.numberRange,
});

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
  axios.post(`courses/search`, {
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
