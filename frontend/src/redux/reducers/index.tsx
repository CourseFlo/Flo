import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Search';
import { setLogin, getUsers } from './User';
import { centeredCourse } from './visualCourse';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isLoggedin: setLogin,
  users: getUsers,
  centeredCourse,
});
