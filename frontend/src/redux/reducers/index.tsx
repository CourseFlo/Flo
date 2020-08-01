import { combineReducers } from 'redux';
import { searchRetrieval, isSearchLoading } from './Search';
import { getUsers } from './User';
import { visualizedCourses } from './visualCourse';
import { authReducer } from './auth';
import { errorReducer } from './error';
import { modalReducer } from './modal';

export default combineReducers({
  searchResults: searchRetrieval,
  isSearchLoading,
  users: getUsers,
  visualizedCourses,
  auth: authReducer,
  error: errorReducer,
  modal: modalReducer,
});
