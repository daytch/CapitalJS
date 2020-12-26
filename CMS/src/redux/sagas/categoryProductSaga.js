import { all, put, call, takeLatest} from 'redux-saga/effects';
import {
    CREATE_CATEGORYPRODUCT,
    GET_CATEGORYPRODUCT,
    SET_CATEGORYPRODUCT,
    DELETE_CATEGORYPRODUCT,
    SET_CATEGORYPRODUCT_LOADING,
  URL,
  UPDATE_CATEGORYPRODUCT,

} from '../../constants';
import { DELETE, GET, POST } from '../../services';
import {/*success,*/ error, success } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;
export function* getCategoryProduct(){
    try{
        yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });
        const res = yield call(
            POST,
            URL.GET_CATEGORYPRODUCT
        )
        if(res.isError === 0){
            yield put({type: SET_CATEGORYPRODUCT, payload: res.result})
        }
         yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: false });
    }catch(err){
        error(err)
    }
}

export function* createCategoryProduct(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_CATEGORYPRODUCT,
      {
        name : data.name,
        masterStatusId: data.status
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getCategoryProduct)
    }
    yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteCategoryProduct(action){
    
    try{
        const data = action.payload
        yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });

        yield call(
            POST,
            URL.DELETE_CATEGORYPRODUCT,{
                id: data
            }
        )

        yield call(getCategoryProduct)
            yield success("delete success");
        yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: false });
    }catch(err){
        error(err)
    }
}

export function* updateCategoryProduct(action){
    try {
    const data = action.payload;
    yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });

    const res = yield call(
      POST,
      URL.SAVE_CATEGORYPRODUCT,
      {
        id: data.id,
        name : data.name,
        masterStatusId: data.status
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getCategoryProduct)
    }
    yield put({ type: SET_CATEGORYPRODUCT_LOADING, payload: true });
  }
  catch (err) {
    error(err)
  }
}


export default function* rootSaga() {
  yield all([
    takeLatest(GET_CATEGORYPRODUCT, getCategoryProduct),
    takeLatest(CREATE_CATEGORYPRODUCT, createCategoryProduct),
    takeLatest(DELETE_CATEGORYPRODUCT, deleteCategoryProduct),
    takeLatest(UPDATE_CATEGORYPRODUCT, updateCategoryProduct)
  ]);
}