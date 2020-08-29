import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_FAQ_LOADING,
  GET_FAQ_GRIDDATA,
  SET_FAQ_GRIDDATA,
  CREATE_FAQ,
  UPDATE_FAQ,
  DELETE_FAQ
} from '../../constants';
import {GET, POST, PUT, DELETE} from '../../services';
import {success, error} from '../../utils/notification';

const faq = state => state.faqReducer;

export function* getFAQGridData(action)
{
  try
  {
    yield put({ type: SET_FAQ_LOADING, payload: true });
    const res = yield call(
      GET,
      URL.GET_FAQ_GRIDDATA
    );
    console.log(res)
    yield put({ type: SET_FAQ_GRIDDATA, payload: res });
    yield put({ type: SET_FAQ_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* createFAQ(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_FAQ_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_FAQ,
      {
        sequence: data.sequence,
        question: data.question,
        answer: data.answer
      }
    );
    yield success(res.message)
    if(callback instanceof Function){
      yield call(callback)
    }
    yield call(getFAQGridData)
    yield put({ type: SET_FAQ_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* updateFAQ(action) {
  try {
    const data = action.payload;
    const callback = action.callback;
    yield put({ type: SET_FAQ_LOADING, payload: true });
    const res = yield call(
      PUT,
      URL.UPDATE_FAQ + data.id,
      {
        sequence: data.sequence,
        question: data.question,
        answer: data.answer
      }
    );
    yield success(res.message)
    if(callback instanceof Function){
      yield call(callback)
    }
    yield call(getFAQGridData)
    yield put({ type: SET_FAQ_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteFAQ(action) {
  try {
    const id = action.payload;
    yield put({ type: SET_FAQ_LOADING, payload: true });
    const res = yield call(
      DELETE,
      URL.DELETE_FAQ + id
    );
    yield call(getFAQGridData)
    yield put({ type: SET_FAQ_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_FAQ_GRIDDATA, getFAQGridData),
    takeLatest(CREATE_FAQ, createFAQ),
    takeLatest(UPDATE_FAQ, updateFAQ),
    takeLatest(DELETE_FAQ, deleteFAQ)
  ]);
}