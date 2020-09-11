import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  GET_SLIDERSTATUS_DROPDOWN,
  GET_BRANCHSTATUS_DROPDOWN,
  GET_BLOGSTATUS_DROPDOWN,
  SET_SLIDERSTATUS_DROPDOWN,
  SET_BRANCHSTATUS_DROPDOWN,
  SET_BLOGSTATUS_DROPDOWN
} from '../../constants';
import {GET /*, POST*/} from '../../services';
import {/*success,*/ error} from '../../utils/notification';
// import history from '../../utils/history';

// const global = state => state.loginReducer;

export function* getSliderStatusDropdown(action) {
  try {
    const res = yield call(
      GET,
      URL.GET_SLIDERSTATUS_DROPDOWN
    );
    if(res.isError===0){
      var data = res.masterStatus.map((v) => ({
        id: v._id,
        name: v.Status
      }))
      console.log(data)
      yield put({ type: SET_SLIDERSTATUS_DROPDOWN, payload: data });
    }
  }
  catch (err) {
    error(err)
  }
}

export function* getBranchStatusDropdown(action) {
  try {
    const res = yield call(
      GET,
      URL.GET_BRANCHSTATUS_DROPDOWN
    );
    if(res.isError===0){
      var data = res.branchStatus.map((v) => ({
        id: v._id,
        name: v.Status
      }))
      yield put({ type: SET_BRANCHSTATUS_DROPDOWN, payload: data });
    }
  }
  catch (err) {
    error(err)
  }
}

export function* getBlogStatusDropdown(action) {
  try {
    const res = yield call(
      GET,
      URL.GET_BLOGSTATUS_DROPDOWN
    );
    if(res.isError===0){
      var data = res.masterStatus.map((v) => ({
        id: v._id,
        name: v.Status
      }))
      yield put({ type: SET_BLOGSTATUS_DROPDOWN, payload: data });
    }
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_SLIDERSTATUS_DROPDOWN, getSliderStatusDropdown),
    takeLatest(GET_BRANCHSTATUS_DROPDOWN, getBranchStatusDropdown),
    takeLatest(GET_BLOGSTATUS_DROPDOWN, getBlogStatusDropdown)
  ]);
}