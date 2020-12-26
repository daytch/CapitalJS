
import { all, call, put, takeLatest, } from 'redux-saga/effects';
import {
  HANDLE_LOGIN, HANDLE_REGISTER, URL
} from '../../constants';

import { GET, POST, PUT, DELETE } from '../../services';
import history from '../../utils/history'
import { message } from '../actions/loginAction';
import { createBrowserHistory } from 'history';

const login = state => state.loginReducer;




export function* doLogin(action) {
  try {
    const data = action.payload;
    console.log(data)
    const res = yield call(
      POST,
      URL.LOGIN,
      data
    );

    if (res.isError === 1 || !res.accessToken) {  
      yield put({type: 'MESSAGE', payload: {
        isError: 1,
        message: res.message
      }})
      // for dev only
      // localStorage.setItem("idToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTIwZTI5ZTNjODVlMTkwYzgwNTY4ZCIsImlhdCI6MTU5OTM1MDQ0NCwiZXhwIjoxNTk5NDM2ODQ0fQ.RqfErR66RXsS_yfYv8pQkRTje6esjMrKaItlCzxspgw");
      // localStorage.setItem("username", "udin");
      // localStorage.setItem("userid", "5f520e29e3c85e190c80568d");
      // yield put({ type: SET_LOGIN_LOADING, payload: false });
      // yield call(history.push, "dashboard");

    } else {
      console.log(res)
      localStorage.setItem("idToken", res.accessToken);
      localStorage.setItem("username", res.username);
      localStorage.setItem("userid", res.id);
      localStorage.setItem("telp",res.telp)
       yield put({type: 'MESSAGE', payload: {
        isError: 0,
        message: ""
      }})

      const dd = createBrowserHistory({forceRefresh:true})
      yield call(dd.push('/home'));
    }
  }
  catch (err) {
    console.log(err)
  }
}

export function* doRegister(action) {
  try {
    const data = action.payload;
    console.log(data)
    const res = yield call(
      POST,
      URL.REGISTER,
      data
    );
    if (res.isError == 1) {
      yield put({type: 'MESSAGE', payload: {
        isError: 1,
        message: res.message
      }})
      // for dev only
      // localStorage.setItem("idToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTIwZTI5ZTNjODVlMTkwYzgwNTY4ZCIsImlhdCI6MTU5OTM1MDQ0NCwiZXhwIjoxNTk5NDM2ODQ0fQ.RqfErR66RXsS_yfYv8pQkRTje6esjMrKaItlCzxspgw");
      // localStorage.setItem("username", "udin");
      // localStorage.setItem("userid", "5f520e29e3c85e190c80568d");
      // yield put({ type: SET_LOGIN_LOADING, payload: false });
      // yield call(history.push, "dashboard");

    } else {
      yield put({type: 'MESSAGE', payload: {
        isError: 0,
        message: res.message,
        isRegister: true
      }})
    }
  }
  catch (err) {
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(HANDLE_LOGIN, doLogin),
    takeLatest(HANDLE_REGISTER, doRegister),
  ]);
}