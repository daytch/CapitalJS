import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import companyProfileReducer from './companyProfileReducer';

const rootReducer = combineReducers({
  globalReducer,
  loginReducer,
  companyProfileReducer
});

export default rootReducer;