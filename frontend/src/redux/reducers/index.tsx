import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Search';
import { setLogin, getUsers } from './User';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isLoggedin: setLogin,
  users: getUsers,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
