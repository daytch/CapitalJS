import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_SLIDER, SET_SLIDER, URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getSlider() {
    try{
        const res = yield call(
      POST,
      URL.GET_SLIDER
    );
    yield put({ type: SET_SLIDER, payload: res.result });
    }catch(err){
        console.log(err)
    }
    
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_SLIDER, getSlider),
  ]);
}