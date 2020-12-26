import { all, put, call, takeLatest} from 'redux-saga/effects';
import {
  URL,
  UPDATE_Product,
  SET_PRODUCT_LOADING,
  SET_PRODUCT,
  GET_PRODUCT,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,

} from '../../constants';
import { DELETE, GET, POST } from '../../services';
import {/*success,*/ error, success } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;
export function* getProduct(){
    try{
        yield put({ type: SET_PRODUCT_LOADING, payload: true });
        const res = yield call(
            POST,
            URL.GET_PRODUCT
        )
        if(res.isError === 0){
            yield put({type: SET_PRODUCT, payload: res.result})
        }
         yield put({ type: SET_PRODUCT_LOADING, payload: false });
    }catch(err){
        error(err)
    }
}

export function* createProduct(action) {
  try {
    const data = action.payload;
    yield put({ type: SET_PRODUCT_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_PRODUCT,
      {
        name: data.name,
        categoryId: data.categoryId,
        addOns: data.addOns,
        weigth: data.weigth,
        capitalPrice: data.capitalprice,
        sellingPrice: data.sellingprice,
        stock: data.stock,
        masterStatusID: data.status,
        pictures: data.pictures
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getProduct)
    }
    yield put({ type: SET_PRODUCT_LOADING, payload: true });
  }
  catch (err) {
    error(err)
  }
}

export function* updateProduct(action) {

  try {
    const data = action.payload;
    yield put({ type: SET_PRODUCT_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.SAVE_PRODUCT,
      {
        id: data.id,
        name: data.name,
        categoryId: data.categoryId,
        addOns: data.addOns,
        weigth: data.weigth,
        capitalPrice: data.capitalprice,
        sellingPrice: data.sellingprice,
        stock: data.stock,
        masterStatusID: data.status,
        pictures: data.pictures
      }
    );

    if (res.isError === 0) {
      yield success(res.message);
      yield call(getProduct)
    }
    yield put({ type: SET_PRODUCT_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* deleteProduct(action){
    try{
        const data = action.payload
        yield put({ type: SET_PRODUCT_LOADING, payload: true });
        yield call(
            POST,
            URL.DELETE_PRODUCT,
            {
                id: data
            }
        )
        yield success("Delete Success");
        yield call(getProduct)
        yield put({ type: SET_PRODUCT_LOADING, payload: false });
    }catch(err){
        error(err)
    }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_PRODUCT, getProduct),
    takeLatest(CREATE_PRODUCT, createProduct),
    takeLatest(UPDATE_PRODUCT, updateProduct),
    takeLatest(DELETE_PRODUCT, deleteProduct)
  ]);
}