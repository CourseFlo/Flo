import { combineReducers } from 'redux';
import { searchFiltering, searchRetrieval } from './Search';

export default combineReducers({
  searchFiltering,
  searchRetrieval,
//   reducer: someReducer              // TODO: ADD REDUCERS HERE
});
