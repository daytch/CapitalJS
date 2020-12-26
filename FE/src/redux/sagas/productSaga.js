import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT, GET_PRODUCT_DETAIL, SET_PRODUCT, SET_PRODUCT_SINGLE, URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getProduct(){
    try{
        const res = yield call(
            POST,
            URL.GET_PRODUCT
        )
        yield put({type: SET_PRODUCT, payload: res.result})
    }catch(err){
        console.log(err)
    }
}

export function* getProductName(action){
    try{
      const data = action.payload

        const res = yield call(
            POST,
            URL.GET_PRODUCT_NAME,
            {
              name: data
            }
        )
        yield put({type: SET_PRODUCT, payload: res.result})
    }catch(err){
        console.log(err)
    }
}

export function* getProductDetail(action){
    try{
      const data = action.payload
        const res = yield call(
            POST,
            URL.GET_PRODUCT,
            {
              id: data.id
            }
        )
        yield put({type: SET_PRODUCT_SINGLE, payload: res.result[0]})
    }catch(err){
        console.log(err)
    }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PRODUCT, getProduct),
    takeLatest(GET_PRODUCT_DETAIL, getProductDetail),
    takeLatest('GET_PRODUCT_NAME', getProductName)
  ]);
}