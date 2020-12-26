import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_OUTLET, GET_PROFILE, GET_SLIDER, SET_OUTLET, SET_PROFILE, SET_SLIDER, URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getOutlet(){
    try{
        const res = yield call(
            POST,
            URL.GET_OUTLET
        )
        yield put({type: SET_OUTLET, payload: res.result})
    }catch(err){
        console.log(err)
    }
}

export function* getOutletDeliver(){
    try{
        const res = yield call(
            POST,
            URL.GET_OUTLET_DELIVER
        )
        yield put({type: SET_OUTLET, payload: res.result})
    }catch(err){
        console.log(err)
    }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_OUTLET, getOutlet),
    takeLatest('GET_OUTLET_DELIVER', getOutletDeliver)
  ]);
}