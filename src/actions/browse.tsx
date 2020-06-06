// eslint-disable-next-line arrow-body-style
export const submitSearch = (filters: { query: string, letterCodes: Array<string>, numberRange: Array<number> }) => {
  return {
    type: 'SUBMIT_SEARCH',
    query: filters.query,
    letterCodes: filters.letterCodes,
    numberRange: filters.numberRange,
  };
};

// eslint-disable-next-line arrow-body-style
export const changeFilters = (filters: { query: string, letterCodes: Array<string>, numberRange: Array<number> }) => {
  return {
    type: 'CHANGE_FILTERS',
    query: filters.query,
    letterCodes: filters.letterCodes,
    numberRange: filters.numberRange,
  };
};
