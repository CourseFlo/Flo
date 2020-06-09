import { Filters } from '../../pages/Browse'; // eslint-disable-line no-unused-vars
 
const searchFilteringDefault: Filters = {
  query: 'cpsc',
  letterCodes: ['CPSC', 'ANTH'],
  numberRange: [200, 400],
};
export const searchFiltering = (store: Filters = searchFilteringDefault, action: any) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
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

// TODO Make courses type to replace below with courses: Courses[]
const searchResultsDefault: { courses: object[] } = { courses: [] };
export const searchRetrieval = (store: { courses: object[] } = searchResultsDefault, action: any) => {
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return store; // TODO add actual behavious of searching
    default:
      return store;
  }
};
