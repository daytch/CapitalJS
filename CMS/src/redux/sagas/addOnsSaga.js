import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
    CREATE_ADD_ONS,
    DELETE_ADD_ONS,
    GET_ADD_ONS,
    SET_ADD_ONS,
    SET_ADD_ONS_LOADING,
    UPDATE_ADD_ONS,
  URL,

} from '../../constants';
import { GET, POST } from '../../services';
import {/*success,*/ error, success } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;
export function* getAddOns(){
    try{
        yield put({ type: SET_ADD_ONS_LOADING, payload: true });
        const res = yield call(
            POST,
            URL.GET_ADD_ONS
        )
        if(res.isError === 0){
            yield put({type: SET_ADD_ONS, payload: res.result})
        }
         yield put({ type: SET_ADD_ONS_LOADING, payload: false });
    }catch(err){
        error(err)
    }
}

export function* createAddOns(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_ADD_ONS_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_ADD_ONS,
      {
        name : data.name,
        weigth: data.weigth,
        capitalPrice: data.capitalprice,
        sellingPrice: data.sellingprice,
         stock: data.stock,
         pictures: data.picture,
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getAddOns)
    }
    yield put({ type: SET_ADD_ONS_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* changeAddOns(action){
    try {
    const data = action.payload;
    yield put({ type: SET_ADD_ONS_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_ADD_ONS,
      {
        id: data.id,
        name : data.name,
        weigth: data.weigth,
        capitalPrice: data.capitalprice,
        sellingPrice: data.sellingprice,
         stock: data.stock,
         pictures: data.picture,
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getAddOns)
    }
    yield put({ type: SET_ADD_ONS_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteAddOns(action){
    try{
        const data = action.payload
        yield put({ type: SET_ADD_ONS_LOADING, payload: true });
        yield call(
            POST,
            URL.DELETE_ADD_ONS,
            {
                id: data
            }
        )
        yield put({ type: SET_ADD_ONS_LOADING, payload: false });
        yield success("delete success");
        yield call(getAddOns)
    }catch(err){
        error(err)
    }
}



export default function* rootSaga() {
  yield all([
    takeLatest(GET_ADD_ONS, getAddOns),
    takeLatest(CREATE_ADD_ONS, createAddOns),
    takeLatest(DELETE_ADD_ONS, deleteAddOns),
    takeLatest(UPDATE_ADD_ONS, changeAddOns)
  ]);
}