import { combineReducers } from 'redux';
import { searchRetrieval, isSearchLoading, letterCodes } from './Search';
import { visualizedCourses } from './courses';
import { authReducer } from './auth';
import { errorReducer } from './error';
import { modalReducer } from './modal';

export default combineReducers({
  searchResults: searchRetrieval,
  isSearchLoading,
  visualizedCourses,
  auth: authReducer,
  error: errorReducer,
  letterCodes,
  modal: modalReducer,
});
