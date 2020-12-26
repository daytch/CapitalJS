import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_OUTLETLOCATION_LOADING,
  GET_OUTLETLOCATION_GRIDDATA,
  SET_OUTLETLOCATION_GRIDDATA,
  CREATE_OUTLETLOCATION,
  UPDATE_OUTLETLOCATION,
  DELETE_OUTLETLOCATION,
  GET_ORDER,
  SET_ORDER
} from '../../constants';
import { GET, POST } from '../../services';
import {success, error } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;


export function* getOrder(action) {
  try {
    const res = yield call(
      GET,
      URL.GET_ORDER,
    )
   yield put({ type: SET_ORDER, payload: res });
    }catch (err) {
    error(err)
  }
}



export default function* rootSaga() {
  yield all([
    takeLatest(GET_ORDER, getOrder),
  ]);
}