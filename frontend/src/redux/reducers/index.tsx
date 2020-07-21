import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval, isSearchLoading } from './Search';
import { setLogin, getUsers, getCurrentUser } from './User';
import { centeredCourse } from './visualCourse';
import { setEditFields } from './Profile';

export default combineReducers({
  searchFilters: searchFiltering,
  searchResults: searchRetrieval,
  isLoggedin: setLogin,
  users: getUsers,
  currentUser: getCurrentUser,
  isEditingField: setEditFields,
  centeredCourse,
  isSearchLoading,
  //   reducer: someReducer              // TODO: ADD REDUCERS HERE

});
