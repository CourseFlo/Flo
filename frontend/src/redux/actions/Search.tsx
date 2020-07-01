import { CHANGE_FILTERS, SUBMIT_SEARCH } from '../constants';
import { Filters } from '../../type-interfaces/Search';

export const changeFilters = (filters: Filters) => ({
  type: CHANGE_FILTERS,
  query: filters.query,
  letterCodes: filters.letterCodes,
  numberRange: filters.numberRange,
});

export const submitSearch = (filters: Filters) => ({
  type: SUBMIT_SEARCH,
  query: filters.query,
  letterCodes: filters.letterCodes,
  numberRange: filters.numberRange,
});
