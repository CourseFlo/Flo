import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Search';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
