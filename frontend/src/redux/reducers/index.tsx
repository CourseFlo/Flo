import { combineReducers } from 'redux';
import { searchRetrieval, isSearchLoading, letterCodes } from './Search';
import { getUsers } from './User';
import { visualizedCourses } from './visualCourse';
import { authReducer } from './auth';
import { errorReducer } from './error';

export default combineReducers({
  searchResults: searchRetrieval,
  isSearchLoading,
  users: getUsers,
  visualizedCourses,
  auth: authReducer,
  error: errorReducer,
  letterCodes,
});
