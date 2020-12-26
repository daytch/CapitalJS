import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  SET_CONTACT_DATA,
  SET_CONTACT_LOADING,
  SET_OUTLETLOCATION_GRIDDATA,
  GET_CONTACT_DATA,
  CREATE_OUTLETLOCATION,
  UPDATE_OUTLETLOCATION,
  DELETE_OUTLETLOCATION,
  CREATE_CONTACT_DATA,
  DELETE_CONTACT_DATA
} from '../../constants';
import { GET, POST } from '../../services';
import {/*success,*/ error } from '../../utils/notification';

// const outletLocation = state => state.outletLocationReducer;

export function* getContactData(action) {
  try {
    // const data = action.payload;
    yield put({ type: SET_CONTACT_LOADING, payload: true });
    const res = yield call(
      POST,
      URL.GET_CONTACT_DATA
    );

    if (res.isError === 0) {
      yield put({ type: SET_CONTACT_DATA, payload: res.result });
    }
    yield put({ type: SET_CONTACT_LOADING, payload: false });
  }
  catch (err) {
    error(err)
  }
}

export function* createContact(action){
    try{
        const data = action.payload
        yield put({type: SET_CONTACT_LOADING, payload: true})
        const res = yield call(
            POST,
            URL.SAVE_CONTACT,
            {
                "name": data.name,
                "email": data.email,
                "phoneNumber": data.phoneNumber
            }

        )
        yield call(getContactData)
        yield put({type: SET_CONTACT_LOADING, payload: false})
    }catch(err){
        error(err)
    }
}

export function* deleteContact(action){
    try{
        const data = action.payload
        yield put({type: SET_CONTACT_LOADING, payload: true})
        const res = yield call(
            POST,
            URL.DELETE_CONTACT,
            {
                id: data
            }
        )
        yield call(getContactData)
        yield put({type: SET_CONTACT_LOADING, payload: false})
    }catch(err){
        error(err)
    }
}




export default function* rootSaga() {
  yield all([
    takeLatest(GET_CONTACT_DATA, getContactData),
    takeLatest(CREATE_CONTACT_DATA, createContact),
    takeLatest(DELETE_CONTACT_DATA, deleteContact)
  ]);
}