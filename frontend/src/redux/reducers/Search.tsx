import { SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE, GET_LETTER_CODES } from '../constants';
// import { Course } from '../../type-interfaces/Course';

// TODO change offering type to be Course[]
export const searchRetrieval = (store: any[] = [], action: any) => {
  switch (action.type) {
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
};

export const letterCodes = (store: string[] = [], action: any) => {
  switch (action.type) {
    case GET_LETTER_CODES:
      return action.codes;
    default:
      return store;
  }
};
