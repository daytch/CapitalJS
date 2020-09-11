import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import companyProfileReducer from './companyProfileReducer';
import outletLocationReducer from './outletLocationReducer';
import sliderWebsiteReducer from './sliderWebsiteReducer';
import faqReducer from './faqReducer';
import blogReducer from './blogReducer';
import careerReducer from './careerReducer';

const rootReducer = combineReducers({
  globalReducer,
  loginReducer,
  companyProfileReducer,
  outletLocationReducer,
  sliderWebsiteReducer,
  faqReducer,
  blogReducer,
  careerReducer
});

export default rootReducer;