import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Browse';
import { setLogin } from './User';

export default combineReducers({
  searchFiltering,
  searchRetrieval,
  setLogin,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
