import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_SLIDERWEBSITE_LOADING,
  GET_SLIDERWEBSITE_GRIDDATA,
  SET_SLIDERWEBSITE_GRIDDATA,
  SAVE_SLIDERWEBSITE,
  DELETE_SLIDERWEBSITE
} from '../../constants';
import {GET, POST} from '../../services';
import {success, error} from '../../utils/notification';

const sliderWebsite = state => state.sliderWebsiteReducer;

export function* getSliderWebsiteGridData(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      GET,
      URL.GET_SLIDERWEBSITE_GRIDDATA
    );
    if(res.isError === 0){
      yield put({ type: SET_SLIDERWEBSITE_GRIDDATA, payload: res.sliderWebsite });
    }
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* saveSliderWebsite(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_SLIDERWEBSITE,
      {
        picture: data.image,
        description: data.linkslider,
        masterStatus: data.status
      }
    );
    if(res.isError === 0)
    {
      console.log(res);
    }
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteSliderWebsite(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_SLIDERWEBSITE_LOADING, payload: true });
    const res = yield call(
      GET,
      URL.DELETE_SLIDERWEBSITE
    );
    if(res.isError === 0){
      yield call(getSliderWebsiteGridData);
    }
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
    takeLatest(DELETE_SLIDERWEBSITE, deleteSliderWebsite)
  ]);
}