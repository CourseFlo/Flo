import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Search';
import { setLogin } from './User';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isLoggedin: setLogin,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
