import axios from 'axios';
import { CHANGE_FILTERS, SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE } from '../constants';
import { Filters } from '../../type-interfaces/Search';

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

export const submitSearch = (filters: Filters) => {
  return (dispatch: Function) => {
    dispatch(setLoadingSearchTrue());
    axios.post('http://localhost:9000/courses/search', {
      courseNumberRange: filters.numberRange,
      courseLetterCodes: filters.letterCodes,
      queryString: filters.query,
    }).then(response => {
      const offerings = response.data;
      dispatch(submitSearchSuccess(offerings));
    }).catch(err => {
      const errorMsg = err.message;
      dispatch(submitSearchFailure(errorMsg));
    });
  }
}
