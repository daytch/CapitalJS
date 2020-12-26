import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_FAQ,SET_FAQ,URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getFaq(action){
    try{
        const res = yield call(
            GET,
            URL.GET_FAQ,
    
        )
        yield put({type: SET_FAQ, payload: res})
    }catch(err){
        console.log(err)
    }
}


export default function* rootSaga() {
  yield all([
    takeLatest(GET_FAQ, getFaq)
  ]);
}