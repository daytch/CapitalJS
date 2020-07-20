import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  HANDLE_COMPANYPROFILE_SUBMIT,
  SET_COMPANYPROFILE_LOADING
} from '../../constants';
import {GET} from '../../services';
import {success, error} from '../../utils/notification';

const companyProfile = state => state.companyProfileReducer;

export function* companyProfileSubmit(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_COMPANYPROFILE_LOADING, payload: true });
    const res = yield call(
      GET,
      // URL.COMPANYPROFILE_SUBMIT
      URL.FAKE
    );
    yield success("Update success")
    yield put({ type: SET_COMPANYPROFILE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_COMPANYPROFILE_SUBMIT, companyProfileSubmit)
  ]);
}