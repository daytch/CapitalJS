import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_OUTLET, GET_PROFILE, GET_SLIDER, SET_OUTLET, SET_PROFILE, SET_SLIDER, URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* storeOrder(action){
    try{
        const data = action.payload
        const res = yield call(
            POST,
            URL.STORE_ORDER,
            data
        )
    }catch(err){
        console.log(err)
    }
}

export function* getOrder(){
  try{
    const res = yield call(
      POST,
      URL.GET_ORDER,
      {
        id: localStorage.getItem('userid')
      }
    )
    yield put({type: 'SET_ORDER', payload: res})
  }catch(err){
    console.log(err)
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('STORE_ORDER', storeOrder),
    takeLatest('GET_ORDER', getOrder)
  ]);
}