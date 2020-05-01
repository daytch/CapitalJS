import { call, put, all, takeLatest } from 'redux-saga/effects';
import { GET, POST } from '../../services';
import {
  URL,
  SET_COUNT,
  HANDLE_COUNT
} from '../../constants';

const header = state => state.headerReducer;

export function* doCount(action) {
  try {
    const data = action.payload;
    console.log("DATA: ", data);
    const data2 = yield call(
      GET,
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("DATA2: ", data2);
    yield put({ type: SET_COUNT, payload: data });
  } catch (err) {
    console.log("ERR: ", err);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_COUNT, doCount)
  ]);
}