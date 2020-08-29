import { all } from 'redux-saga/effects';
import Global from './globalSaga';
import Login from './loginSaga';
import CompanyProfile from './companyProfileSaga';
import OutletLocation from './outletLocationSaga';
import SliderWebsite from './sliderWebsiteSaga';
import FAQ from './faqSaga';
import Blog from './blogSaga';

export default function* rootSaga() {
  yield all([
    Global(),
    Login(),
    CompanyProfile(),
    OutletLocation(),
    SliderWebsite(),
    FAQ(),
    Blog()
  ]);
}