import { combineReducers } from 'redux';
import registerReducer from './register';

const rootReducer = combineReducers({
  registerReducer,
});

export default rootReducer;
