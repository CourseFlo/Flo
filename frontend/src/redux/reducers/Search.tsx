import { CHANGE_FILTERS, SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE } from '../constants';
import { Filters } from '../../type-interfaces/Search'; // eslint-disable-line no-unused-vars
// import { Course } from '../../type-interfaces/Course';

const searchFilteringDefault: Filters = {
  query: '',
  letterCodes: ['CPSC', 'ANTH'],
  numberRange: [200, 400],
};
export const searchFiltering = (store: Filters = searchFilteringDefault, action: any) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return {
        ...store,
        query: action.query,
        letterCodes: action.letterCodes,
        numberRange: action.numberRange,
      };
    default:
      return store;
  }
};

export const searchRetrieval = (store: any[] = [], action: any) => {
  switch (action.type) {
    // TODO add actual behaviour of searching
    case SUBMIT_SEARCH:
      return action.offerings;
    case SUBMIT_SEARCH_FAILURE:
      return [];
    default:
      return store;
  }
};

export const isSearchLoading = (isLoading: boolean = false, action: any) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return false;
    case SUBMIT_SEARCH_FAILURE:
      return false;
    case SET_LOADING_SEARCH_TRUE:
      return true;
    default:
      return isLoading;
  }
}
