import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import sliderReducer from './sliderReducer'
import profileReducer from './profileReducer'
import blogReducer from './blogReducer'
import detailBlogReducer from './detailBlogReducer'
import outletReducer from './outletReducer'
import faqReducer from './faqReducer'
import productReducer from './productReducer'
import detailProductReducer from './detailProductReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers({
  loginReducer,
  sliderReducer,
  profileReducer,
  blogReducer,
  detailBlogReducer,
  outletReducer,
  faqReducer,
  productReducer,
  detailProductReducer,
  orderReducer
});

export default rootReducer;