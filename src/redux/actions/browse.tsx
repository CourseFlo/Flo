import { CHANGE_FILTERS, SUBMIT_SEARCH } from '../constants';
import { Filters } from '../../type-interfaces/Browse'; // eslint-disable-line no-unused-vars

// eslint-disable-next-line arrow-body-style
export const changeFilters = (filters: Filters) => {
  return {
    type: CHANGE_FILTERS,
    query: filters.query,
    letterCodes: filters.letterCodes,
    numberRange: filters.numberRange,
  };
};

// eslint-disable-next-line arrow-body-style
export const submitSearch = (filters: Filters) => {
  return {
    type: SUBMIT_SEARCH,
    query: filters.query,
    letterCodes: filters.letterCodes,
    numberRange: filters.numberRange,
  };
};
