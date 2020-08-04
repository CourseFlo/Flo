import { combineReducers } from 'redux';
import { searchRetrieval, isSearchLoading, letterCodes } from './Search';
import { getUsers } from './User';
import { visualizedCourses, updateCourseCache } from './courses';
import { authReducer } from './auth';
import { errorReducer } from './error';
import { modalReducer } from './modal';

export default combineReducers({
  searchResults: searchRetrieval,
  isSearchLoading,
  users: getUsers,
  courses: updateCourseCache,
  visualizedCourses,
  auth: authReducer,
  error: errorReducer,
  letterCodes,
  modal: modalReducer,
});
