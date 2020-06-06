import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Browse';

export default combineReducers({
  searchFiltering,
  searchRetrieval,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
