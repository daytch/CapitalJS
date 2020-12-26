import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import loginReducer from './loginReducer';
import companyProfileReducer from './companyProfileReducer';
import outletLocationReducer from './outletLocationReducer';
import sliderWebsiteReducer from './sliderWebsiteReducer';
import faqReducer from './faqReducer';
import blogReducer from './blogReducer';
import careerReducer from './careerReducer';
import contactReducer from './contactReducer'
import addOnsReducer from './addOnsReducer'
import categoryProductReducer from './categoryProductReducer'
import productReducer from './productReducer'
import orderReducer from './orderReducer'


const rootReducer = combineReducers({
  globalReducer,
  loginReducer,
  companyProfileReducer,
  outletLocationReducer,
  sliderWebsiteReducer,
  faqReducer,
  blogReducer,
  careerReducer,
  contactReducer,
  addOnsReducer,
  categoryProductReducer,
  productReducer,
  orderReducer
});

export default rootReducer;