import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval, isSearchLoading } from './Search';
import { setLogin, getUsers } from './User';
import { visualizedCourses } from './visualCourse';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isSearchLoading,
  isLoggedin: setLogin,
  users: getUsers,
  visualizedCourses,
  //   reducer: someReducer              // TODO: ADD REDUCERS HERE

});
