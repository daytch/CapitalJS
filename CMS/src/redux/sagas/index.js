import { all } from 'redux-saga/effects';
import Global from './globalSaga';
import Login from './loginSaga';
import CompanyProfile from './companyProfileSaga';
import OutletLocation from './outletLocationSaga';
import SliderWebsite from './sliderWebsiteSaga';
import FAQ from './faqSaga';
import Blog from './blogSaga';
import Carrer from './careerSaga'
import Contact from './contactSaga'
import AddOns from './addOnsSaga'
import categoryProduct from './categoryProductSaga'
import Product from './productSaga'
import Order from './orderSaga'

export default function* rootSaga() {
  yield all([
    Global(),
    Login(),
    CompanyProfile(),
    OutletLocation(),
    SliderWebsite(),
    FAQ(),
    Blog(),
    Carrer(),
    Contact(),
    AddOns(),
    categoryProduct(),
    Product(),
    Order()
  ]);
}