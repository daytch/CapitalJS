import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_SLIDERWEBSITE_LOADING,
  GET_SLIDERWEBSITE_GRIDDATA,
  SET_SLIDERWEBSITE_GRIDDATA,
  SAVE_SLIDERWEBSITE,
  UPDATE_SLIDERWEBSITE,
  DELETE_SLIDERWEBSITE
} from '../../constants';
import {GET, POST} from '../../services';
import {success, error} from '../../utils/notification';

const sliderWebsite = state => state.sliderWebsiteReducer;

export function* getSliderWebsiteGridData() {
  try {
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.GET_SLIDERWEBSITE_GRIDDATA
    );
    console.log(res.result)
    yield put({ type: SET_SLIDERWEBSITE_GRIDDATA, payload: res.result || [] });
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* saveSliderWebsite(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_SLIDERWEBSITE,
      {
        picture: data.image,
        description: data.linkslider,
        masterStatusId: data.status
      }
    );
    yield success(res.message)
    if(callback instanceof Function){
      yield call(callback)
    }
    console.log("CALLING")
    yield call(getSliderWebsiteGridData)
    console.log("CALLED")
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* updateSliderWebsite(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_SLIDERWEBSITE,
      {
        id: data.id,
        picture: data.image,
        description: data.linkslider,
        masterStatusId: data.status
      }
    );
    yield success(res.message)
    if(callback instanceof Function){
      yield call(callback)
    }
    yield call(getSliderWebsiteGridData)
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteSliderWebsite(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.DELETE_SLIDERWEBSITE,
      {
        id: data
      }
    );
    yield success(res.message)
    if(callback instanceof Function){
      yield call(callback)
    }
    yield call(getSliderWebsiteGridData)
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_SLIDERWEBSITE_GRIDDATA, getSliderWebsiteGridData),
    takeLatest(SAVE_SLIDERWEBSITE, saveSliderWebsite),
    takeLatest(UPDATE_SLIDERWEBSITE, updateSliderWebsite),
    takeLatest(DELETE_SLIDERWEBSITE, deleteSliderWebsite)
  ]);
}