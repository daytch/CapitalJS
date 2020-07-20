import { all, takeLatest } from 'redux-saga/effects';
import {
  HANDLE_LOGIN
} from '../../constants';

const login = state => state.loginReducer;

export function* doLogin(action) {
  try {
  }
  catch (err) {
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_LOGIN, doLogin)
  ]);
}