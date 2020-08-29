import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  HANDLE_LOGIN,
  SET_LOGIN_LOADING
} from '../../constants';
import {POST} from '../../services';
import {success, error} from '../../utils/notification';
import history from '../../utils/history';

const login = state => state.loginReducer;

export function* doLogin(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_LOGIN_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.LOGIN,
      data
    );
    if(res.isError===1 || !res.accessToken){
      yield error(res.message);
    } else {
      localStorage.setItem("idToken", res.accessToken);
      localStorage.setItem("username", res.username);
      localStorage.setItem("userid", res.id);
      yield put({ type: SET_LOGIN_LOADING, payload: false });
      yield call(history.push, "dashboard"); 
    }
  }
  catch (err) {
    error(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_LOGIN, doLogin)
  ]);
}