export interface Filters {
  query: string,
  letterCodes: string[],
  numberRange: number[],
}

export interface Props {
  searchFilters: Filters,
  searchResults: { courses: object[] },
  changeFilters: Function,
  submitSearch: Function,
}
