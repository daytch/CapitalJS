import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_OUTLETLOCATION_LOADING,
  GET_OUTLETLOCATION_GRIDDATA,
  SET_OUTLETLOCATION_GRIDDATA,
  CREATE_OUTLETLOCATION,
  UPDATE_OUTLETLOCATION
} from '../../constants';
import { GET, POST } from '../../services';
import {/*success,*/ error } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;

export function* getOutletLocationGridData(action) {
  try {
    // const data = action.payload;
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: true });
    const res = yield call(
      GET,
      URL.GET_OUTLETLOCATION_GRIDDATA
    );
    console.log(res.result)
    if (res.isError === 0) {
      yield put({ type: SET_OUTLETLOCATION_GRIDDATA, payload: res.result });
    }
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* createOutletLocation(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_OUTLETLOCATION,
      {
        name: data.branch,
        telephone: data.phone,
        address: data.address,
        maps: data.map,
        masterStatusId: data.status,
        picture: data.picture
      }
    );
    if (res.isError === 0) {
      console.log(res);
    }
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* updateOutletLocation(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_OUTLETLOCATION,
      {
        _id: data.id,
        name: data.branch,
        telephone: data.phone,
        address: data.address,
        maps: data.map,
        masterStatusId: data.status,
        picture: data.picture
      }
    );
    if (res.isError === 0) {
      console.log(res);
    }
    yield put({ type: SET_OUTLETLOCATION_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_OUTLETLOCATION_GRIDDATA, getOutletLocationGridData),
    takeLatest(CREATE_OUTLETLOCATION, createOutletLocation),
    takeLatest(UPDATE_OUTLETLOCATION, updateOutletLocation)
  ]);
}