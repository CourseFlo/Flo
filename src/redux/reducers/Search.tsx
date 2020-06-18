import { CHANGE_FILTERS, SUBMIT_SEARCH } from '../constants';
import { Filters } from '../../type-interfaces/Search'; // eslint-disable-line no-unused-vars

const searchFilteringDefault: Filters = {
  query: 'cpsc',
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

let i = 0;
// interface searchRes {
//   [key: number]: any,
// }
// // TODO Make courses type to replace below with an actual data structure for results
// const searchResultsDefault: searchRes = {
//   1: 'asdf',
const searchResultsDefault: string[] = [];
export const searchRetrieval = (store: string[] = searchResultsDefault, action: any) => {
  switch (action.type) {
    // TODO add actual behaviour of searching
    case SUBMIT_SEARCH:
      const another: string[] = store;
      i += 1;
      another.push(i + 'stuff');
      return another;
    default:
      return store;
  }
};
