import { all, put, call, takeLatest } from 'redux-saga/effects';
import { GET_BLOG, GET_BLOGS,SET_BLOG,SET_BLOGS,URL } from '../../constants';
import { GET, POST, PUT, DELETE } from '../../services';

// const faq = state => state.faqReducer;

export function* getblogs(action){
    try{
        const res = yield call(
            POST,
            URL.GET_BLOG,
    
        )
        yield put({type: SET_BLOGS, payload: res.result})
    }catch(err){
        console.log(err)
    }
}

export function* getDetailBlog(action){
    try{
        const res = yield call(
            POST,
            URL.GET_BLOG,
            {
                id: action.payload
            }
    
        )
        yield put({type: SET_BLOG, payload: res.result[0]})
    }catch(err){
        console.log(err)
    }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_BLOGS, getblogs),
    takeLatest(GET_BLOG, getDetailBlog)
  ]);
}