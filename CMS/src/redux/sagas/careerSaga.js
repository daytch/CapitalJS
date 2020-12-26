import { all, put, call, takeLatest } from 'redux-saga/effects';
import {
  URL,
  HANDLE_CAREER_SUBMIT,
  SET_CAREER_LOADING,
  SET_CAREER_DATA,
  GET_CAREER_DATA,
  UPDATE_CARRER_DATA,
  DELETE_CARRER_DATA
} from '../../constants';
import {DELETE, GET, POST, PUT} from '../../services';
import {success, error} from '../../utils/notification';
import { deleteCareer } from '../actions/careerAction';

export function* getCarrer(){
  try{
    yield put({type: SET_CAREER_LOADING, payload: true})
    const res = yield call(
      GET,
      URL.GET_CAREER_DATA
    )
    yield put({type: SET_CAREER_DATA, payload: res})
    yield put({type: SET_CAREER_LOADING, payload: false})
  }catch(err){
    error(err)
  }
}

export function* submitCareer(action){
  const data = action.payload
  console.log('saga ' + data.title)
  try{
    yield put({type: SET_CAREER_LOADING, payload: true})
    const res = yield call(
      POST,
      URL.SAVE_CAREER,
      {
        title: data.title,
        description: data.description,
        status: data.status
      }
    )
      yield call(getCarrer)
      yield success("Berhasil ditambahkan")
    yield put({type: SET_CAREER_LOADING, payload: false})
  }catch(err){
    error(err)
  }
}

export function* updateCarrer(action){
  const data = action.payload
  try{
    yield put({type: SET_CAREER_LOADING, payload: true})
    const res = yield call(
      PUT,
      URL.UPDATE_CARRER + data.id,
      {
        title: data.title,
        description: data.description,
        status: data.status
      }
    )
    yield success("Berhasil diubah");
      yield call(getCarrer)
   
    yield put({type: SET_CAREER_LOADING, payload: false})
  }catch(err){
    error(err)
  }
}

export function* deleteCarrer(action){
  const data = action.payload
  console.log(URL.DELETE_CARRER + data)
  console.log('delete' + data)
  yield put({type: SET_CAREER_LOADING, payload: true})
  yield call(
    DELETE,
    URL.DELETE_CARRER + data
  )
  yield success("Berhasil dihapus");
  yield call(getCarrer)
  yield put({type: SET_CAREER_LOADING, payload: false})

}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_CAREER_DATA, getCarrer),
    takeLatest(HANDLE_CAREER_SUBMIT, submitCareer),
    takeLatest(UPDATE_CARRER_DATA, updateCarrer),
    takeLatest(DELETE_CARRER_DATA, deleteCarrer)
  ]);
}