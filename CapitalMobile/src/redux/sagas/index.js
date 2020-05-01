import { all } from 'redux-saga/effects';
import Header from './headerSaga';

export default function* rootSaga() {
  yield all([Header()]);
}