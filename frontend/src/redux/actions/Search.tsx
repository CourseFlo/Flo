import axios, { AxiosResponse, AxiosError } from 'axios';
import { SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE } from '../constants';
import { Filters } from '../../type-interfaces/Search';

export const changeFilters = (val: any) => {console.log(val)}; // FIXME Delete this once Navbar changes pulled in

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
  console.log(filters);
  dispatch(setLoadingSearchTrue());
  axios.post(`/courses/search`, {
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
