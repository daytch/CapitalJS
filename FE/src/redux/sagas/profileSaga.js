import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_PROFILE, GET_SLIDER, SET_PROFILE, SET_SLIDER, URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getCompanyProfile(){
    try{
        const res = yield call(
            GET,
            URL.GET_PROFILE
        )
        yield put({type: SET_PROFILE, payload: res.companyProfile})
    }catch(err){
        console.log(err)
    }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PROFILE, getCompanyProfile),
  ]);
}