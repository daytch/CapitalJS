import { all } from 'redux-saga/effects';
import Login from './loginSaga';
import CompanyProfile from './companyProfileSaga';
// import Detail from './detailSaga';
// import Transaction from './transactionSaga';
// import Profile from './profilesSaga';
// import Layout from './layoutSaga';

export default function* rootSaga() {
  yield all([Login(), CompanyProfile()]);
}