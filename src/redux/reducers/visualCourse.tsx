// Where does store come from in Browse.tsx?

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