import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval, isSearchLoading } from './Search';
import { setLogin, getUsers, getCurrentUser } from './User';
import { setEditFields } from './Profile';
import { visualizedCourses } from './visualCourse';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isSearchLoading,
  isLoggedin: setLogin,
  users: getUsers,
  currentUser: getCurrentUser,
  isEditingField: setEditFields,
  visualizedCourses,
  //   reducer: someReducer              // TODO: ADD REDUCERS HERE

});
