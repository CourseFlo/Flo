import { combineReducers } from 'redux';
import { searchRetrieval, isSearchLoading } from './Search';
import { setLogin, getUsers, getCurrentUser } from './User';
import { visualizedCourses } from './visualCourse';
import { authReducer } from './auth';
import { errorReducer } from './error';

export default combineReducers({
  searchResults: searchRetrieval,
  isSearchLoading,
  isLoggedin: setLogin,
  users: getUsers,
  currentUser: getCurrentUser,
  visualizedCourses,
  auth: authReducer,
  error: errorReducer,
  //   reducer: someReducer              // TODO: ADD REDUCERS HERE

});
