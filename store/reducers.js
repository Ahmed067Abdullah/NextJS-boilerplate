import { combineReducers } from 'redux';
import testReducer from '../pages-helper/test/Test.reducer';

export default combineReducers({
  test: testReducer
});