import { all } from 'redux-saga/effects';
import Login from './loginSaga';
import Slider from './sliderSaga'
import Profile from './profileSaga'
import Blog from './blogSaga'
import Outlet from './outletSaga'
import Faq from './faqSaga'
import Product from './productSaga'
import Order from './orderSaga'
// import Detail from './detailSaga';
// import Transaction from './transactionSaga';
// import Profile from './profilesSaga';
// import Layout from './layoutSaga';

export default function* rootSaga() {
  yield all([
    Login(),
    Slider(),
    Profile(),
    Blog(),
    Outlet(),
    Faq(),
    Product(),
    Order()
  ]);
}